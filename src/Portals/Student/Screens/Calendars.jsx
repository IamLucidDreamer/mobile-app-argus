import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Platform,
  StatusBar,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { Divider } from "react-native-elements";
import BottomNav from "../Components/UniversalComponents/BottomNav";
import TopComponent from "../Components/UniversalComponents/TopComponent";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Feather from "react-native-vector-icons/Feather";
import Buttons from "../Components/UniversalComponents/Buttons";
import { docsName } from "../../../utils/DocsData";
import axiosInstance from "../../../utils/axiosInstance";
import { Calendar } from "react-native-calendars";
import { useSelector, useDispatch } from "react-redux";
import { getStudentClass } from "../../../redux/actions/studentActions";

export default function Calendars() {
  const studentClass = useSelector((state) => state.student.studentClass);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStudentClass());
  }, []);

  return (
    <ScrollView>
      <View style={{ marginVertical: 30 }}>
        <Calendar
          theme={{ todayTextColor: "#ba0913", arrowColor: "#ba0913" }}
          markingType="dot"
          markedDates={{
            //new Date(11-01-2022).toLocaleDateString("fr-CA"):{marked: true, dotColor: '#50cebb'},
            "2022-01-22": { marked: true, dotColor: "#000" },
          }}
        />
      </View>
      {studentClass.map((data, index) => {
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
              elevation: 8,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  marginHorizontal: 1,
                  justifyContent: "space-evenly",
                }}
              >
                <Text
                  style={{
                    color: "#8890A6",
                    fontSize: 19,
                  }}
                >
                  Name: {data.classname}
                </Text>
                <Text
                  style={{
                    color: "#8890A6",
                    fontSize: 15,
                  }}
                >
                  Location: {data.location}
                </Text>
                <Text
                  style={{
                    color: "#8890A6",
                    fontSize: 15,
                  }}
                >
                  Instructor: {data.instructorName}
                </Text>

                <Text
                  style={{
                    color: "#8890A6",
                    fontSize: 15,
                  }}
                >
                  Date: {new Date(data.date).toLocaleDateString("en-GB")}
                </Text>
              </View>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
}
