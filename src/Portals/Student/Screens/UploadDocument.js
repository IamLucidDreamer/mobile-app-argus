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
} from "react-native";
import { Divider } from "react-native-elements";
import BottomNav from "../Components/UniversalComponents/BottomNav";
import TopComponent from "../Components/UniversalComponents/TopComponent";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Picker } from "@react-native-picker/picker";
import { useSelector } from "react-redux";
import { docsName } from "../../../utils/DocsData";
import * as DocumentPicker from "expo-document-picker";
import Buttons from "../Components/UniversalComponents/Buttons";
import * as SecureStore from "expo-secure-store";
import axiosInstance from "../../../utils/axiosInstance";

export default function UploadDoc({ navigation }) {
  const [selectedDocName, setSelectedDocName] = useState("");
  const [uploadDocOpt, setUploadDocOpt] = useState([]);
  const docs = useSelector((state) => state.student.docs);
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [loading, setLoading] = useState(false);

  GLOBAL.XMLHttpRequest =
    GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;

  useEffect(() => {
    let docOpt = [];
    docsName.forEach((element) => {
      if (docs.some((d) => d.name === element && d.isApproved === false)) {
        docOpt.push(element);
      } else if (!docs.some((d) => d.name === element)) {
        docOpt.push(element);
      }
    });
    setUploadDocOpt(docOpt);
  }, []);

  const uploadDoc = () => {
    setLoading(true);
    SecureStore.getItemAsync("jwt").then((token) => {
      const formdata = new FormData();
      console.log(formdata, "Before");
      formdata.append("name", selectedDocName);
      formdata.append("image", {
        name: selectedDoc.name,
        type: selectedDoc.mimeType,
        uri: selectedDoc.uri,
      });
      console.log(formdata, "After");
      axiosInstance
        .post(`/docs2/upload`, formdata, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          setLoading(false);
          console.log("then Called");
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
          console.log("Catch Block");
        });
    });
  };

  const reploadDoc = () => {
    setLoading(true);
    SecureStore.getItemAsync("jwt").then((token) => {
      console.log(formdata, "Before");
      const formdata = new FormData();
      formdata.append("name", selectedDocName);
      formdata.append("image", {
        name: selectedDoc.name,
        type: selectedDoc.mimeType,
        uri: selectedDoc.uri,
      });
      console.log(formdata, "After");
      axiosInstance
        .put(`/docs2/reUpload`, formdata, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/formdata",
          },
        })
        .then((res) => {
          setLoading(false);
          console.log(res);
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
    });
  };

  return (
    <View style={styles.container}>
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
        <Picker
          selectedValue={selectedDocName}
          style={{
            height: 40,
            fontSize: 20,
            borderBottomColor: "#8890A6",
            borderBottomWidth: 3,
            marginBottom: 20,
          }}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedDocName(itemValue)
          }
        >
          <Picker.Item label="Select document type" value="" enabled={false} />
          {uploadDocOpt.map((d, index) => {
            return <Picker.Item key={index} label={d} value={d} />;
          })}
        </Picker>
        {selectedDoc ? (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 10,
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                color: "#BA0913",
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              {selectedDoc?.name}
            </Text>
            <TouchableOpacity onPress={() => setSelectedDoc(null)}>
              <FontAwesome5
                name={"times"}
                size={25}
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  color: "gray",
                  marginRight: 15,
                }}
              />
            </TouchableOpacity>
          </View>
        ) : null}
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
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          {/* <TouchableOpacity>
                <FontAwesome5
                  name={'camera'}
                  size={35}
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    padding: 20,
                    backgroundColor: '#BA0913',
                    borderRadius: 50,
                  }}
                />
              </TouchableOpacity> */}
          <TouchableOpacity
            onPress={async () => {
              const choosenDoc = await DocumentPicker.getDocumentAsync();
              console.log(choosenDoc);
              if (choosenDoc.type !== "cancel") {
                setSelectedDoc(choosenDoc);
              }
            }}
          >
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
        {selectedDoc ? (
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <Buttons
              func={
                docs.some((d) => d.name === selectedDocName)
                  ? reploadDoc
                  : uploadDoc
              }
              title={
                docs.some((d) => d.name === selectedDocName)
                  ? "ReUpload"
                  : "Upload"
              }
            />
          </View>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F5F9",
    alignItems: "center",
  },
});
