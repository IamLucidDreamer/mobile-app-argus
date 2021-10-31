import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import BottomNav from "../Components/UniversalComponents/BottomNav";
import TopComponent from "../Components/UniversalComponents/TopComponent";

export default function UploadedDocuments() {
  return (
    <SafeAreaView style={styles.container}>
      <TopComponent />
      <ScrollView>
        <Text
          style={{
            alignSelf: "flex-start",
            color: "#2A2B2F",
            fontSize: 20,
            fontWeight: "bold",
            marginHorizontal: 25,
            marginTop: 20,
            marginBottom: 10,
          }}
        >
          Uploaded Document
        </Text>
        <View
          style={{
            width: "95%",
            backgroundColor: "#fff",
            padding: 15,
            alignSelf: "center",
            marginVertical: 10,
            borderWidth: 2,
            borderColor: "#15C277",
            borderRadius: 20,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.8,
            shadowRadius: 4,
            elevation: 8,
          }}
        >
          <Text
            style={{
              color: "#8890A6",
              fontSize: 17,
              lineHeight: 20,
              marginVertical: 15,
              fontWeight: "bold",
            }}
          >
            Name of the Document will come here.
          </Text>
          <Text
            style={{
              color: "#15C277",
              fontSize: 17,
              lineHeight: 20,
              marginBottom: 15,
              fontWeight: "bold",
            }}
          >
            Approved
          </Text>
        </View>
        <View
          style={{
            width: "95%",
            backgroundColor: "#fff",
            padding: 15,
            alignSelf: "center",
            marginVertical: 10,
            borderWidth: 2,
            borderColor: "#EBC700",
            borderRadius: 20,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.8,
            shadowRadius: 4,
            elevation: 8,
          }}
        >
          <Text
            style={{
              color: "#8890A6",
              fontSize: 17,
              lineHeight: 20,
              marginVertical: 15,
              fontWeight: "bold",
            }}
          >
            Name of the Document will come here.
          </Text>
          <Text
            style={{
              color: "#EBC700",
              fontSize: 17,
              lineHeight: 20,
              marginBottom: 15,
              fontWeight: "bold",
            }}
          >
            Pending Review
          </Text>
        </View>
        <View
          style={{
            width: "95%",
            backgroundColor: "#fff",
            padding: 15,
            alignSelf: "center",
            marginVertical: 10,
            borderWidth: 2,
            borderColor: "#BA0913",
            borderRadius: 20,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.8,
            shadowRadius: 4,
            elevation: 8,
          }}
        >
          <Text
            style={{
              color: "#8890A6",
              fontSize: 17,
              lineHeight: 20,
              marginTop: 15,
              fontWeight: "bold",
            }}
          >
            Name of the Document will come here.
          </Text>
          <Text
            style={{
              color: "#8890A6",
              fontSize: 17,
              lineHeight: 20,
              marginVertical: 15,
            }}
          >
            Note with the reason of rejection will come here.
          </Text>
          <Text
            style={{
              color: "#BA0913",
              fontSize: 17,
              lineHeight: 20,
              marginBottom: 15,
              fontWeight: "bold",
            }}
          >
            Rejected
          </Text>
        </View>
        <View
          style={{
            width: "95%",
            backgroundColor: "#fff",
            padding: 15,
            alignSelf: "center",
            marginVertical: 10,
            borderWidth: 2,
            borderColor: "#BA0913",
            borderRadius: 20,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.8,
            shadowRadius: 4,
            elevation: 8,
          }}
        >
          <Text
            style={{
              color: "#8890A6",
              fontSize: 17,
              lineHeight: 20,
              marginTop: 15,
              fontWeight: "bold",
            }}
          >
            Name of the Document will come here.
          </Text>
          <Text
            style={{
              color: "#8890A6",
              fontSize: 17,
              lineHeight: 20,
              marginVertical: 15,
            }}
          >
            Note with the reason of rejection will come here.
          </Text>
          <Text
            style={{
              color: "#BA0913",
              fontSize: 17,
              lineHeight: 20,
              marginBottom: 15,
              fontWeight: "bold",
            }}
          >
            Rejected
          </Text>
        </View>
        <View
          style={{
            width: "95%",
            backgroundColor: "#fff",
            padding: 15,
            alignSelf: "center",
            marginVertical: 10,
            borderWidth: 2,
            borderColor: "#BA0913",
            borderRadius: 20,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.8,
            shadowRadius: 4,
            elevation: 8,
          }}
        >
          <Text
            style={{
              color: "#8890A6",
              fontSize: 17,
              lineHeight: 20,
              marginTop: 15,
              fontWeight: "bold",
            }}
          >
            Name of the Document will come here.
          </Text>
          <Text
            style={{
              color: "#8890A6",
              fontSize: 17,
              lineHeight: 20,
              marginVertical: 15,
            }}
          >
            Note with the reason of rejection will come here.
          </Text>
          <Text
            style={{
              color: "#BA0913",
              fontSize: 17,
              lineHeight: 20,
              marginBottom: 15,
              fontWeight: "bold",
            }}
          >
            Rejected
          </Text>
        </View>
        <View
          style={{
            width: "95%",
            backgroundColor: "#fff",
            padding: 15,
            alignSelf: "center",
            marginVertical: 10,
            borderWidth: 2,
            borderColor: "#BA0913",
            borderRadius: 20,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.8,
            shadowRadius: 4,
            elevation: 8,
          }}
        >
          <Text
            style={{
              color: "#8890A6",
              fontSize: 17,
              lineHeight: 20,
              marginTop: 15,
              fontWeight: "bold",
            }}
          >
            Name of the Document will come here.
          </Text>
          <Text
            style={{
              color: "#8890A6",
              fontSize: 17,
              lineHeight: 20,
              marginVertical: 15,
            }}
          >
            Note with the reason of rejection will come here.
          </Text>
          <Text
            style={{
              color: "#BA0913",
              fontSize: 17,
              lineHeight: 20,
              marginBottom: 15,
              fontWeight: "bold",
            }}
          >
            Rejected
          </Text>
        </View>
        <View
          style={{
            width: "95%",
            backgroundColor: "#fff",
            padding: 15,
            alignSelf: "center",
            marginVertical: 10,
            borderWidth: 2,
            borderColor: "#BA0913",
            borderRadius: 20,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.8,
            shadowRadius: 4,
            elevation: 8,
          }}
        >
          <Text
            style={{
              color: "#8890A6",
              fontSize: 17,
              lineHeight: 20,
              marginTop: 15,
              fontWeight: "bold",
            }}
          >
            Name of the Document will come here.
          </Text>
          <Text
            style={{
              color: "#8890A6",
              fontSize: 17,
              lineHeight: 20,
              marginVertical: 15,
            }}
          >
            Note with the reason of rejection will come here.
          </Text>
          <Text
            style={{
              color: "#BA0913",
              fontSize: 17,
              lineHeight: 20,
              marginBottom: 15,
              fontWeight: "bold",
            }}
          >
            Rejected
          </Text>
        </View>
      </ScrollView>
      <Divider width={1} />
      <BottomNav />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F5F9",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
