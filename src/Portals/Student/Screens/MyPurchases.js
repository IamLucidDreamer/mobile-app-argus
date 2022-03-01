import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import { useSelector, useDispatch } from "react-redux";
import { getUsersCourse } from "../../../redux/actions/studentActions";
import BottomNav from "../Components/UniversalComponents/BottomNav";
import TopComponent from "../Components/UniversalComponents/TopComponent";

export default function MyPurchases({ navigation }) {
  const course = useSelector((state) => state.student.course);
  const progress = useSelector((state) => state.student.progress);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersCourse());
  }, []);

  console.log(course);
  return (
    <View style={styles.container}>
      <ScrollView>
        {course.length === 0 ? (
          <Text>No Course Purchased Yet</Text>
        ) : (
          course.map((courseData, index) => {
            return (
              <View
                key={index}
                style={{
                  width: "95%",
                  backgroundColor: "#fff",
                  padding: 15,
                  alignSelf: "center",
                  marginVertical: 20,
                  borderRadius: 20,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 1 },
                  shadowOpacity: 0.8,
                  shadowRadius: 4,
                  elevation: 8,
                }}
              >
                <Text
                  style={{
                    color: "#2A2B2F",
                    fontSize: 17,
                    fontWeight: "bold",
                    marginBottom: 15,
                  }}
                >
                  {courseData.name}
                </Text>
                <Divider width={1} />
                <Text
                  style={{
                    color: "#8890A6",
                    fontSize: 15,
                    lineHeight: 20,
                    marginVertical: 15,
                  }}
                >
                  {courseData.description}
                </Text>
                <TouchableOpacity
                  style={{
                    width: "100%",
                    backgroundColor: "#BA0913",
                    color: "#ffffff",
                    borderRadius: 10,
                    height: 55,
                    alignItems: "center",
                    justifyContent: "center",
                    marginVertical: 10,
                  }}
                  onPress={() => {
                    navigation.navigate("Module", {
                      courseId: courseData?._id,
                    });
                    console.log(courseData._id, "Hello");
                  }}
                >
                  <Text style={{ color: "white", fontSize: 20 }}>Modules</Text>
                </TouchableOpacity>
              </View>
            );
          })
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F5F9",
  },
});
