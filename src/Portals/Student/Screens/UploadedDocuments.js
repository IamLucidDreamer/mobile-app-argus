import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import { useSelector } from "react-redux";
import { docsName } from "../../../utils/DocsData";
import BottomNav from "../Components/UniversalComponents/BottomNav";
import TopComponent from "../Components/UniversalComponents/TopComponent";

export default function UploadedDocuments() {
  const docs = useSelector((state) => state.student.docs);

  return (
    <View style={styles.container}>
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
        {docsName.map((docName, index) => {
          let doc = docs.filter((d) => d.name === docName)[0];
          return (
            <View key={index}>
              {doc ? (
                doc.isApproved === null ? (
                  <View
                    style={{
                      width: "95%",
                      backgroundColor: "#fff",
                      padding: 15,
                      alignSelf: "center",
                      marginBottom: 20,
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
                      {doc.name}
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
                ) : doc.isApproved ? (
                  <View
                    key={index}
                    style={{
                      width: "95%",
                      backgroundColor: "#fff",
                      padding: 15,
                      alignSelf: "center",
                      marginBottom: 20,
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
                      {docName}
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
                ) : (
                  <View
                    key={index}
                    style={{
                      width: "95%",
                      backgroundColor: "#fff",
                      padding: 15,
                      alignSelf: "center",
                      marginBottom: 20,
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
                      {docName}
                    </Text>

                    <Text
                      style={{
                        color: "#8890A6",
                        fontSize: 17,
                        lineHeight: 20,
                        marginVertical: 15,
                      }}
                    >
                      {doc?.note}
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
                )
              ) : null}
            </View>
          );
        })}
      </ScrollView>
      <Divider width={1} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F5F9",
  },
});
