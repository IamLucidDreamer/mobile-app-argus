import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const items = [
  {
    text: "DashBoard",
  },
  {
    text: "Enroll",
  },
  {
    text: "My Purchases",
  },
  {
    text: "Transcripts",
  },
  {
    text: "Messages",
  },
  {
    text: "Notifications",
  },
  {
    text: "New Upload",
  },
  {
    text: "Uploaded",
  },
  {
    text: "Calender",
  },
];

export default function TopComponent() {
  const [active, setActive] = useState("Dashboard");

  return (
    <View>
      <View
        style={{
          marginHorizontal: 10,
          marginVertical: 25,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableOpacity>
          <FontAwesome5
            name={"arrow-left"}
            size={25}
            style={{ marginLeft: 10, marginRight: 25 }}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            alignSelf: "center",
            color: "#BA0913",
          }}
        >
          ARGUS<Text style={{ color: "#707070" }}>SECURITY</Text>
        </Text>
        <TouchableOpacity>
          <Image
            style={{
              width: 60,
              height: 60,
              resizeMode: "contain",
              borderRadius: 25,
            }}
            source={require("./../../../../../assets/UniversalAssets/TestingImage.png")}
          />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View
            key={index}
            style={{
              alignItems: "center",
              width: 200,
              borderBottomWidth: 5,
              borderBottomColor: active === "Dashboard" ? "#BA0913" : "#ffffff", //Make this to active red otherwise white
            }}
          >
            <Text style={{ fontSize: 18, color: "#68696D" }}>{item.text}</Text>
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
          elevation: 4,
        }}
      />
    </View>
  );
}
