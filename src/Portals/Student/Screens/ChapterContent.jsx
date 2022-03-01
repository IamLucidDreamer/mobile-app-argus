import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import * as SecureStore from "expo-secure-store";
import axiosInstance from "../../../utils/axiosInstance";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import * as Speech from "expo-speech";

const ChapterContent = ({ route, navigation }) => {
  const { courseId, currentChapterId } = route.params;
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    SecureStore.getItemAsync("jwt").then((token) => {
      axiosInstance
        .get(`/material/getChapter/${courseId}/${currentChapterId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log(res.data.data.slides);
          setSlides(res.data.data.slides);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {slides.length === 0 ? (
        <Text>No Chapter Content Data Available.</Text>
      ) : (
        <>
          <ScrollView>
            {slides.map((contentData, index) => {
              return contentData.question === null ? (
                <StudyMaterial
                  materialText={contentData.text}
                  materialTitle={contentData.title}
                  key={index}
                />
              ) : (
                <View>
                  <Text>{contentData.question}</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <TouchableOpacity
                      style={{ padding: 10, backgroundColor: "#ccc" }}
                    >
                      <Text>{contentData.optionA}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{ padding: 10, backgroundColor: "#ccc" }}
                    >
                      <Text>{contentData.optionB}</Text>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <TouchableOpacity
                      style={{ padding: 10, backgroundColor: "#ccc" }}
                    >
                      <Text>{contentData.optionC}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{ padding: 10, backgroundColor: "#ccc" }}
                    >
                      <Text>{contentData.optionD}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
          </ScrollView>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              backgroundColor: "#fff",
              width: "100%",
              paddingVertical: 8,
            }}
          >
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <FontAwesome5
                name={"arrow-left"}
                size={22}
                style={{ marginLeft: 15, marginRight: 25 }}
              />
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

export default ChapterContent;

const styles = StyleSheet.create({});

const StudyMaterial = (props) => {
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>
        {props.materialTitle}
      </Text>
      <Text style={{ fontSize: 16 }}>{props.materialText}</Text>
      <TouchableOpacity
        style={{ backgroundColor: "#000", width: 50, height: 30 }}
        onPress={() => Speech.speak(props.materialText)}
      >
        <Text style={{ color: "#fff" }}>Start</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ backgroundColor: "#ccc", width: 50, height: 30 }}
        onPress={() => Speech.stop()}
      >
        <Text style={{ color: "#fff" }}>Stop</Text>
      </TouchableOpacity>
    </View>
  );
};
