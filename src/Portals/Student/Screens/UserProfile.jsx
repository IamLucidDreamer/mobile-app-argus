import React from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
} from "react-native";

export default function UserProfile() {
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
            Name Here
          </Text>
          <Text style={{ fontSize: 18, textAlign: "center" }}>
            User ID Here
          </Text>
        </View>
        <Text style={{ marginBottom: 10, fontSize: 19 }}>Personal Details</Text>
        <View
          style={{
            width: "95%",
            alignItems: "center",
            backgroundColor: "#fff",
            borderRadius: 20,
          }}
        >
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="First Name"
              placeholderTextColor="#8890A6"
              onChangeText={(password) => setForm({ ...form, password })}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Last Name"
              placeholderTextColor="#8890A6"
              secureTextEntry={true}
              onChangeText={(password) => setForm({ ...form, password })}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Date Of Birth"
              keyboardType="numeric"
              placeholderTextColor="#8890A6"
              secureTextEntry={true}
              onChangeText={(password) => setForm({ ...form, password })}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Password"
              placeholderTextColor="#8890A6"
              secureTextEntry={true}
              onChangeText={(password) => setForm({ ...form, password })}
            />
          </View>
        </View>
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
