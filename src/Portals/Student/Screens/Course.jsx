import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import axiosInstance from "../../../utils/axiosInstance";
import * as SecureStore from "expo-secure-store";
import { useSelector } from "react-redux";
import { Divider } from "react-native-elements/dist/divider/Divider";

const Course = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [course, setCourse] = useState([]);

  useEffect(() => {
    setLoading(true);
    SecureStore.getItemAsync("jwt").then((token) => {
      axiosInstance
        .get("/material/getUsersCourses", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setCourse(res.data.data);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
    });
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#BA0913" />
      ) : (
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
                    <Text style={{ color: "white", fontSize: 20 }}>
                      Modules
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            })
          )}
        </ScrollView>
      )}
    </View>
  );
};

export default Course;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F5F9",
  },
});
