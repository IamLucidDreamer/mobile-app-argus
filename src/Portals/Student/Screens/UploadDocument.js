import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Divider } from "react-native-elements";
import BottomNav from "../Components/UniversalComponents/BottomNav";
import TopComponent from "../Components/UniversalComponents/TopComponent";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function StudentHome() {
  return (
    <SafeAreaView style={styles.container}>
      <TopComponent />
      <ScrollView>
        <ImageBackground
          style={{
            flex: 1,
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
          source={require("../../../../assets/UniversalAssets/TestingImage.png")}
        >
          <Text
            style={{
              alignSelf: "flex-start",
              color: "#2A2B2F",
              fontSize: 20,
              fontWeight: "bold",
              marginHorizontal: 25,
              marginVertical: 20,
            }}
          >
            Upload Document
          </Text>
          <View
            style={{
              backgroundColor: "#fff",
              width: "90%",
              borderRadius: 20,
              padding: 20,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.8,
              shadowRadius: 2,
              elevation: 4,
            }}
          >
            <TextInput
              style={{
                height: 40,
                fontSize: 20,
                borderBottomColor: "#8890A6",
                borderBottomWidth: 3,
                marginBottom: 40,
              }}
              placeholder="Type of Document"
              onChangeText={(text) => this.setState({ text })}
            />
            <Text
              style={{
                alignSelf: "flex-start",
                color: "#68696D",
                fontSize: 15,
                fontWeight: "bold",
                marginBottom: 20,
              }}
            >
              Select the Source
            </Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <TouchableOpacity>
                <FontAwesome5
                  name={"camera"}
                  size={35}
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    padding: 20,
                    backgroundColor: "#BA0913",
                    borderRadius: 50,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesome5
                  name={"folder-open"}
                  size={35}
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    padding: 20,
                    backgroundColor: "#BA0913",
                    borderRadius: 50,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
      <Divider width={1} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : "0",
    backgroundColor: "#fff",
  },
});