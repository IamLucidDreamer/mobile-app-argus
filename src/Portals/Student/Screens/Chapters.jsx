import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import axiosInstance from "../../../utils/axiosInstance";
import * as SecureStore from "expo-secure-store";
import { useSelector } from "react-redux";
import { Divider } from "react-native-elements/dist/divider/Divider";

const Chapters = ({ route, navigation }) => {
  const [chapters, setChapters] = useState([]);
  const { courseId, moduleId } = route.params;
  console.log(courseId, moduleId);

  useEffect(() => {
    SecureStore.getItemAsync("jwt").then((token) => {
      axiosInstance
        .get(`/material/getModule/${courseId}/${moduleId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log(res.data.data.Chapters);
          setChapters(res.data.data.Chapters);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        {chapters.length === 0 ? (
          <Text>No Data available</Text>
        ) : (
          chapters.map((chaptersData, index) => {
            console.log(chaptersData);
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
                  {chaptersData.name}
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
                  {chaptersData.description}
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
                    navigation.navigate("ChapterContent", {
                      courseId: courseId,
                      currentChapterId: chaptersData._id,
                    });
                  }}
                >
                  <Text style={{ color: "white", fontSize: 20 }}>
                    Study Material
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })
        )}
      </ScrollView>
    </View>
  );
};

export default Chapters;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F5F9",
  },
});
