import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import axiosInstance from "../../../utils/axiosInstance";
import BottomNav from "../Components/UniversalComponents/BottomNav";
import TopComponent from "../Components/UniversalComponents/TopComponent";

export default function Enroll() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (courses.length === 0) {
      setLoading(true);
      axiosInstance
        .get("/material/getAllCourses")
        .then((res) => {
          setLoading(false);
          setCourses(res.data.data);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#BA0913" />
      ) : (
        <ScrollView style={{ paddingTop: 30 }}>
          {courses.map((c, index) => {
            return (
              <View
                key={index}
                style={{
                  width: "95%",
                  backgroundColor: "#fff",
                  padding: 15,
                  alignSelf: "center",
                  marginBottom: 30,
                  borderRadius: 20,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 1 },
                  shadowOpacity: 0.8,
                  shadowRadius: 4,
                  elevation: 6,
                }}
              >
                <Text
                  style={{
                    color: "#2A2B2F",
                    fontSize: 17,
                    fontWeight: "bold",
                    marginBottom: 30,
                    fontFamily: "Poppins-Light",
                  }}
                >
                  {c?.name} $ {c?.price} + HST
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
                  {c?.description}
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
                >
                  <Text style={{ color: "white", fontSize: 18 }}>
                    Register Now
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F5F9",
  },
});
