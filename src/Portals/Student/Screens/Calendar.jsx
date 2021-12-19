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
  Image,
} from "react-native";
import { Divider } from "react-native-elements";
import BottomNav from "../Components/UniversalComponents/BottomNav";
import TopComponent from "../Components/UniversalComponents/TopComponent";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Feather from "react-native-vector-icons/Feather";
import Buttons from "../Components/UniversalComponents/Buttons";
import { useSelector } from "react-redux";
import { docsName } from "../../../utils/DocsData";
import axiosInstance from "../../../utils/axiosInstance";

export default function CalendarPage() {
  return (
    <ScrollView>
      <View style={{ alignItems: "center" }}>
        <Text>Hello</Text>
      </View>
    </ScrollView>
  );
}
