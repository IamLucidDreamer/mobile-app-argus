import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Divider } from "react-native-elements";
import BottomNav from "../Components/UniversalComponents/BottomNav";
import TopComponent from "../Components/UniversalComponents/TopComponent";
import DashBoard from "./DashBoard";
import Enroll from "./Enroll";
import Messages from "./Messages";
import MyPurchases from "./MyPurchases";
import MyTranscripts from "./MyTranscripts";
import Notification from "./Notification";
import SigninScreen from "./SigninScreen";
import UploadDoc from "./UploadDocument";
import UploadedDocuments from "./UploadedDocuments";

export default function StudentHome() {
  const windowWidth = Dimensions.get("window").width / 2;
  const [active, setActive] = useState({
    text: "DashBoard",
    component: DashBoard,
  });

  const items = [
    {
      text: "DashBoard",
      component: DashBoard,
    },
    {
      text: "Enroll",
      component: Enroll,
    },
    {
      text: "My Purchases",
      component: MyPurchases,
    },
    {
      text: "Transcripts",
      component: MyTranscripts,
    },
    {
      text: "Messages",
      component: Messages,
    },
    {
      text: "Notifications",
      component: Notification,
    },
    {
      text: "New Upload",
      component: UploadDoc,
    },
    {
      text: "Uploaded",
      component: UploadedDocuments,
    },
  ];

  return (
    <View style={{ height: "100%" }}>
      <View style={{ backgroundColor: "white" }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {items.map((item, index) => (
            <View
              key={index}
              style={{
                alignItems: "center",
                width: windowWidth,
                paddingVertical: 3,
                borderBottomWidth: 5,
                borderBottomColor:
                  active.text === item.text ? "#BA0913" : "#ffffff", //Make this to active red otherwise white
              }}
            >
              <TouchableOpacity onPress={() => setActive(item)} style={{padding:2}}>
                <Text
                  style={{
                    fontSize: 15,
                    color: "#68696D",
                    width: windowWidth,
                    textAlign: "center",
                  }}
                >
                  {item.text}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <Divider
          width={0.5}
          style={{
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 8,
          }}
        />
      </View>

      <ScrollView style={{paddingTop:15}}>
        <active.component />
      </ScrollView>
      <Divider width={1} />
      <BottomNav />
    </View>
  );
}
