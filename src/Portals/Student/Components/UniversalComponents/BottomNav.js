import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function BottomNav() {
  return (
    <View
      style={{
        backgroundColor: "#",
        flexDirection: "row",
        padding: 10,
        paddingHorizontal: 10,
        justifyContent: "space-between",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 2,
      }}
    >
      <View
        style={{
          width: "35%",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Icon icon="calendar" text="Calender" />
        <Icon icon="id-badge" text="Jobs" />
      </View>
      <View style={{ width: "20%", marginTop: -45 }}>
        <TouchableOpacity
          style={{
            height: 70,
            width: 70,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#F4F5F9",
            borderRadius: 100,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 3,
          }}
        >
          <FontAwesome5
            name={"home"}
            size={25}
            style={{ marginBottom: 3, alignItems: "center", color: "#ba0913" }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: "35%",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Icon icon="heart" text="Buy" />
        <Icon icon="paper-plane" text="Contact" />
      </View>
    </View>
  );
}

const Icon = (props) => (
  <TouchableOpacity style={{ alignItems: "center" }}>
    <FontAwesome5
      name={props.icon}
      size={25}
      style={{ marginBottom: 3, alignItems: "center", color: "#8890A6" }}
    />
    <Text style={{ color: "#8890A6", fontSize: 13 }}>{props.text}</Text>
  </TouchableOpacity>
);
