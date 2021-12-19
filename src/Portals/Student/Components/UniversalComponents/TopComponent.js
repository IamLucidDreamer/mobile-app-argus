import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function TopComponent({ navigation }) {
  return (
    <View style={{ backgroundColor: "#F4F5F9" }}>
      <View
        style={{
          marginHorizontal: 10,
          marginTop: 40,
          marginBottom: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ width: 60, height: 60 }}></View>
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
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              overflow: "hidden",
            }}
          >
            <Image
              style={{
                width: "100%",
                height: "100%",
                resizeMode: "contain",
              }}
              source={require("./../../../../../assets/UniversalAssets/TestingImage.png")}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
