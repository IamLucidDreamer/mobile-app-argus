import React from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
} from "react-native";
import { useSelector } from "react-redux";
import BackgroundDetails from "../Components/UserprofileForms/BackgroundDetails";
import JobPreferences from "../Components/UserprofileForms/JobPreferences";
import PersonalDetails from "../Components/UserprofileForms/PersonalDetails";

export default function UserProfile() {
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  return (
    <ScrollView style={{ alignContent: "center" }}>
      <View style={{ alignItems: "center" }}>
        <Image
          style={{
            width: 120,
            height: 120,
          }}
          source={require("../../../../assets/UniversalAssets/Logo512.png")}
        />
        <View style={{ margin: 15 }}>
          <Text
            style={{ fontWeight: "bold", fontSize: 20, textAlign: "center" }}
          >
            {user?.name + " " + (user?.lastname !== null ? user?.lastname : "")}
          </Text>
          <Text style={{ fontSize: 18, textAlign: "center" }}>
            {user.docId}{" "}
          </Text>
        </View>
        <PersonalDetails />
        <BackgroundDetails />
        <JobPreferences />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  inputView: {
    borderBottomWidth: 1,
    borderColor: "#8890A6",
    width: "90%",
    height: 55,
    marginBottom: 30,
    alignItems: "flex-start",
  },
  TextInput: {
    width: "100%",
    flex: 1,
    padding: 10,
    marginLeft: 10,
    color: "#8890A6",
    fontSize: 20,
  },
});
