import React, { useEffect, useState } from "react";
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
  ActivityIndicator,
} from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import { useSelector } from "react-redux";
import axiosInstance from "../../../utils/axiosInstance";
import BottomNav from "../Components/UniversalComponents/BottomNav";
import TopComponent from "../Components/UniversalComponents/TopComponent";

export default function Messages() {
  const auth = useSelector((state) => state.auth);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(auth);
  useEffect(() => {
    if (messages.length === 0) {
      setLoading(true);
      axiosInstance
        .get(`/message/get/${auth.id}?page=1`, {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        })
        .then((res) => {
          setLoading(false);
          console.log("Hello");
          setMessages(
            res.data.data.messages.sort(
              (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
            )
          );
        })
        .catch((err) => {
          setLoading(false);
        });
    }
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#BA0913" />
      ) : (
        <ScrollView>
          <View style={{ paddingTop: 30 }}>
            {messages?.map((m) => {
              return (
                <View
                  key={m?._id}
                  style={{
                    width: "95%",
                    backgroundColor: "#fff",
                    padding: 15,
                    alignSelf: "center",
                    marginBottom: 20,
                    borderRadius: 20,
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.8,
                    shadowRadius: 4,
                    elevation: 8,
                  }}
                >
                  <View style={{ flexDirection: "row", marginBottom: 15 }}>
                    <Image
                      style={{
                        width: 60,
                        height: 60,
                        resizeMode: "contain",
                        borderRadius: 10,
                      }}
                      source={require("../../../../assets/UniversalAssets/TestingImage.png")}
                    />
                    <View
                      style={{
                        marginHorizontal: 15,
                        justifyContent: "space-evenly",
                      }}
                    >
                      <Text
                        style={{
                          color: "#8890A6",
                          fontSize: 15,
                          fontWeight: "bold",
                        }}
                      >
                        {m?.userName}
                      </Text>
                      <Text
                        style={{
                          color: "#8890A6",
                          fontSize: 13,
                          fontWeight: "bold",
                        }}
                      >
                        Position in the Company
                      </Text>
                    </View>
                  </View>
                  <Divider width={1} />
                  <Text
                    style={{
                      color: "#8890A6",
                      fontSize: 15,
                      lineHeight: 20,
                      marginTop: 15,
                      fontWeight: "bold",
                    }}
                  >
                    {m?.subject}:
                  </Text>
                  <Text
                    style={{
                      color: "#8890A6",
                      fontSize: 15,
                      lineHeight: 20,
                      marginVertical: 15,
                    }}
                  >
                    {m?.message}
                  </Text>
                  <View style={{ alignSelf: "flex-end", flexDirection: "row" }}>
                    <Text
                      style={{
                        color: "#8890A6",
                        fontSize: 13,
                        fontWeight: "bold",
                      }}
                    >
                      {new Date(m.createdAt).toLocaleDateString("en-GB")}
                    </Text>
                    <Text
                      style={{
                        color: "#8890A6",
                        fontSize: 13,
                        fontWeight: "bold",
                        marginHorizontal: 15,
                      }}
                    >
                      {new Date(m.createdAt).toLocaleTimeString(`en-US`, {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F5F9",
  },
});
