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
import { useSelector } from "react-redux";
import { docsName } from "../../../utils/DocsData";
import axiosInstance from "../../../utils/axiosInstance";
import Navigation from "../../../Navigation";

export default function DashBoard({ navigation }) {
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);
  const docs = useSelector((state) => state.student.docs);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    let arr = [];
    if (user?.employmentRecord?.length === 0) {
      arr.push(`Add employment record`);
    }
    if (!user?.jobSearch?.looking) {
      arr.push(`Add job search deatils`);
    }

    if (!user?.dateOfBirth) {
      arr.push(`Add personal details`);
    }
    if (!user?.hasCriminalRecord) {
      arr.push(`Add background details`);
    }
    if (!user?.street) {
      arr.push(`Add contact details`);
    }
    if (!user?.courses?.length === 0) {
      arr.push(`Buy a course`);
    }

    docsName.forEach((element) => {
      let doc = docs.filter((d) => d.name === element);
      if (doc.length !== 0) {
        if (doc[0].isApproved === false) {
          arr.push(`${element} doc disapproved upload again.`);
        }
      } else {
        if (element !== "Additional Doc 1" && element !== "Additional Doc 2")
          arr.push(`Upload ${element} doc.`);
      }
    });

    setTasks(arr);
  }, [docs, user]);

  return (
    <ScrollView>
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 13, marginTop: 15, color: "#3d3c41" }}>
          Welcome Back,
        </Text>
        <Text style={{ fontSize: 27, fontWeight: "bold", color: "#3d3c41" }}>
          {user?.name + " " + (user?.lastname !== null ? user?.lastname : "")}
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginVertical: 20 }}
        >
          {options.map((options, index) => (
            <View key={index} style={{ marginHorizontal: 15 }}>
              <TouchableOpacity
                style={{ alignItems: "center" }}
                onPress={() => navigation.navigate()}
              >
                <View style={{}}>
                  <Feather
                    name={options.name}
                    size={30}
                    style={{
                      marginBottom: 3,
                      alignItems: "center",
                      color: "#ba0913",
                      padding: 18,
                      backgroundColor: "#fff",
                      borderRadius: 50,
                      shadowColor: "#000",
                      shadowOffset: { width: 0, height: 1 },
                      shadowOpacity: 0.8,
                      shadowRadius: 2,
                      elevation: 7,
                    }}
                  />
                </View>
                <Text style={{ fontSize: 14, marginTop: 5, color: "#3d3c41" }}>
                  {options.title}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <Divider width={10} color={"#000"} />

        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            marginBottom: 15,
            color: "gray",
            textAlign: "center",
          }}
        >
          To Do
        </Text>
        <ScrollView>
          {tasks.map((t, index) => {
            return (
              <View
                key={index}
                style={{
                  minWidth: 350,
                  maxWidth: 350,
                  flexDirection: "row",
                  backgroundColor: "#fff",
                  padding: 15,
                  marginHorizontal: 15,
                  alignSelf: "center",
                  alignContent: "center",
                  marginBottom: 15,
                  borderRadius: 20,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 1 },
                  shadowOpacity: 0.8,
                  shadowRadius: 4,
                  elevation: 6,
                }}
              >
                <View style={{ justifyContent: "center" }}>
                  <Feather
                    name={"check-circle"}
                    size={30}
                    style={{
                      marginBottom: 3,
                      alignItems: "center",
                      color: "#ba0913",
                      padding: 7,
                      backgroundColor: "#fff",
                      borderRadius: 30,
                      shadowColor: "#000",
                      shadowOffset: { width: 0, height: 1 },
                      shadowOpacity: 0.8,
                      shadowRadius: 2,
                      elevation: 4,
                    }}
                  />
                </View>
                <Text
                  style={{
                    margin: 10,
                    paddingLeft: 2,
                    fontSize: 15,
                    color: "#68696d",
                    fontFamily: "Poppins-Medium",
                  }}
                >
                  {t}
                </Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const options = [
  {
    title: "My Training",
    name: "award",
    to: "Edit profile",
  },
  {
    title: "Upload Documents",
    name: "arrow-up-circle",
    to: "",
  },
  {
    title: "My Purchases",
    name: "book-open",
    to: "",
  },
  {
    title: "My Transcripts",
    name: "check-circle",
    to: "",
  },
  {
    title: "My Courses",
    name: "edit-3",
    to: "",
  },
];
