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

export default function Notification() {
  const auth = useSelector((state) => state.auth);
  const [activity, setactivity] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (activity.length === 0) {
      setLoading(true);
      axiosInstance
        .get(`/user-activity/get?page=1&limit=100000`, {
          headers: {
            Authorization: `Bearer ${auth?.token}`,
          },
        })
        .then((res) => {
          setLoading(false);
          setactivity(
            res.data.data.activities.sort(
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
            {activity.map((a) => {
              return (
                <View
                  key={a?._id}
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
                  <Text
                    style={{
                      color: "#8890A6",
                      fontSize: 15,
                      lineHeight: 20,
                      marginVertical: 15,
                    }}
                  >
                    {a?.activityDetails}
                  </Text>
                  <View style={{ alignSelf: "flex-end", flexDirection: "row" }}>
                    <Text
                      style={{
                        color: "#8890A6",
                        fontSize: 13,
                        fontWeight: "bold",
                      }}
                    >
                      {new Date(a?.createdAt).toLocaleDateString("en-GB")}
                    </Text>
                    <Text
                      style={{
                        color: "#8890A6",
                        fontSize: 13,
                        fontWeight: "bold",
                        marginHorizontal: 15,
                      }}
                    >
                      {new Date(a?.createdAt).toLocaleTimeString(`en-US`, {
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
