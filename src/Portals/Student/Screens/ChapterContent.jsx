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
  const [number, setNumber] = useState(0);
  const [isStop, setIsStop] = useState(false);
  const [isPause, setIsPause] = useState(false);

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
        <Content
          slides={slides}
          position={number}
          stop={isStop}
          pause={isPause}
        />
      )}
      <View
        style={{
          position: "absolute",
          bottom: 0,
          backgroundColor: "#fff",
          width: "100%",
          paddingVertical: 8,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {number !== 0 ? (
          <TouchableOpacity
            onPress={() => {
              let num = number;
              setNumber(--num);
            }}
          >
            <FontAwesome5
              name={"chevron-left"}
              size={22}
              style={{ marginLeft: 15, marginRight: 25 }}
            />
          </TouchableOpacity>
        ) : (
          <View>
            <FontAwesome5
              name={"chevron-left"}
              size={22}
              color={"#fff"}
              style={{ marginLeft: 15, marginRight: 25 }}
            />
          </View>
        )}
        <View style={{ flexDirection: "row" }}>
          {slides[number]?.question === null ? (
            <>
              <TouchableOpacity
                onPress={() => {
                  Speech.stop();
                }}
              >
                <FontAwesome5
                  name={"stop"}
                  size={22}
                  style={{ marginLeft: 15, marginRight: 25 }}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => Speech.pause()}>
                <FontAwesome5
                  name={"pause"}
                  size={22}
                  style={{ marginLeft: 15, marginRight: 25 }}
                />
              </TouchableOpacity>
            </>
          ) : null}
        </View>
        {number !== slides.length - 1 ? (
          <TouchableOpacity
            onPress={() => {
              let num = number;
              setNumber(++num);
            }}
          >
            <FontAwesome5
              name={"chevron-right"}
              size={22}
              style={{ marginLeft: 15, marginRight: 25 }}
            />
          </TouchableOpacity>
        ) : (
          <View>
            <FontAwesome5
              name={"chevron-left"}
              size={22}
              color={"#fff"}
              style={{ marginLeft: 15, marginRight: 25 }}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default ChapterContent;

const styles = StyleSheet.create({});

const StudyMaterial = (props) => {
  Speech.speak(props.materialText);
  if (props.stop) {
    Speech.stop();
  }
  if (props.pause) {
    Speech.pause();
  }
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>
        {props.materialTitle}
      </Text>
      <Text style={{ fontSize: 16 }}>{props.materialText}</Text>
    </View>
  );
};

const Content = ({ slides, position, stop, pause }) => {
  const contentData = slides[position];
  return (
    <>
      <ScrollView>
        {contentData.question === null ? (
          <StudyMaterial
            materialText={contentData.text}
            materialTitle={contentData.title}
            stop={stop}
            pause={pause}
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
        )}
      </ScrollView>
    </>
  );
};
