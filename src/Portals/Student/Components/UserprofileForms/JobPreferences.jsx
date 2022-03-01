import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { updateUser } from "../../../../redux/actions/studentActions";
import { Picker } from "@react-native-picker/picker";

const JobPreferences = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  console.log(user);

  const PersonalDetailsSchema = Yup.object().shape({
    gender: Yup.string().required("Required"),
    weight: Yup.string().required("Required"),
    height: Yup.string().required("Required"),
    eyeColor: Yup.string().required("Required"),
    hairColor: Yup.string().required("Required"),
  });

  return (
    <>
      <Text
        style={{
          marginTop: 25,
          marginBottom: 15,
          fontSize: 25,
          fontWeight: "bold",
        }}
      >
        Job Preferences
      </Text>
      <View
        style={{
          paddingVertical: 10,
          width: "95%",
          alignItems: "center",
          backgroundColor: "#fff",
          borderRadius: 20,
        }}
      >
        <Formik
          initialValues={{
            gender: user?.gender,
            weight: user?.weight,
            height: user?.height,
            eyeColor: user?.eyeColor,
            hairColor: user?.hairColor,
          }}
          validationSchema={PersonalDetailsSchema}
          onSubmit={(values) => {
            console.log(values);
            dispatch(updateUser(values));
          }}
        >
          {(formProps) => (
            <>
              <View style={styles.inputView}>
                <Text style={[styles.TextInput]}>
                  {user?.name +
                    " " +
                    (user?.lastname !== null ? user?.lastname : "")}
                </Text>
              </View>
              <View style={styles.inputView}>
                <Text style={[styles.TextInput]}>{user?.dateOfBirth}</Text>
              </View>
              <View style={styles.inputView}>
                <Text style={[styles.TextInput]}>{user?.email}</Text>
              </View>
              <View style={styles.inputView}>
                <Picker
                  style={styles.TextInput}
                  onValueChange={formProps.handleChange("gender")}
                  onBlur={formProps.handleBlur("gender")}
                  value={user?.gender}
                >
                  <Picker.Item label="Select Gender" value="" />
                  <Picker.Item label="Male" value="male" />
                  <Picker.Item label="Female" value="female" />
                  <Picker.Item label="Others" value="others" />
                </Picker>
                {formProps.errors.gender && formProps.touched.gender ? (
                  <Text style={{ color: "#8890A6" }}>
                    {formProps.errors.gender}
                  </Text>
                ) : null}
              </View>
              <View style={styles.inputView}>
                <TextInput
                  style={styles.TextInput}
                  placeholder="Weight"
                  autoCapitalize="none"
                  placeholderTextColor="#8890A6"
                  onChangeText={formProps.handleChange("weight")}
                  onBlur={formProps.handleBlur("weight")}
                  value={formProps.values.weight}
                />
                {formProps.errors.weight && formProps.touched.weight ? (
                  <Text style={{ color: "#8890A6" }}>
                    {formProps.errors.weight}
                  </Text>
                ) : null}
              </View>
              <View style={styles.inputView}>
                <TextInput
                  style={styles.TextInput}
                  placeholder="Height"
                  autoCapitalize="none"
                  keyboardType="number-pad"
                  placeholderTextColor="#8890A6"
                  onChangeText={formProps.handleChange("height")}
                  onBlur={formProps.handleBlur("height")}
                  value={formProps.values.height}
                />
                {formProps.errors.height && formProps.touched.height ? (
                  <Text style={{ color: "#8890A6" }}>
                    {formProps.errors.height}
                  </Text>
                ) : null}
              </View>
              <View style={styles.inputView}>
                <Picker
                  style={styles.TextInput}
                  onValueChange={formProps.handleChange("eyeColor")}
                  onBlur={formProps.handleBlur("eyeColor")}
                  value={user?.eyeColor}
                >
                  <Picker.Item label="Select Eye Color" value="" />
                  <Picker.Item label="Brown" value="brown" />
                  <Picker.Item label="Hazel" value="hazel" />
                  <Picker.Item label="Gray" value="gray" />
                  <Picker.Item label="Amber" value="amber" />
                  <Picker.Item label="Blue" value="blue" />
                  <Picker.Item label="Green" value="green" />
                  <Picker.Item label="Others" value="others" />
                </Picker>
                {formProps.errors.eyeColor && formProps.touched.eyeColor ? (
                  <Text style={{ color: "#8890A6" }}>
                    {formProps.errors.eyeColor}
                  </Text>
                ) : null}
              </View>
              <View style={styles.inputView}>
                <Picker
                  style={styles.TextInput}
                  onValueChange={formProps.handleChange("hairColor")}
                  onBlur={formProps.handleBlur("hairColor")}
                  value={user?.hairColor}
                >
                  <Picker.Item label="Select Hair Color" value="" />
                  <Picker.Item label="Black" value="black" />
                  <Picker.Item label="Brown" value="brown" />
                  <Picker.Item label="Blond" value="blond" />
                  <Picker.Item label="Red" value="red" />
                  <Picker.Item label="White/Gray" value="white/gray" />
                  <Picker.Item label="Others" value="others" />
                </Picker>
                {formProps.errors.hairColor && formProps.touched.hairColor ? (
                  <Text style={{ color: "#8890A6" }}>
                    {formProps.errors.hairColor}
                  </Text>
                ) : null}
              </View>
              <TouchableOpacity
                onPress={formProps.handleSubmit}
                style={styles.Btn}
              >
                {loading ? (
                  <ActivityIndicator size="large" color="white" />
                ) : (
                  <Text style={styles.txt}>Update</Text>
                )}
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </View>
    </>
  );
};

export default JobPreferences;

const styles = StyleSheet.create({
  inputView: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#8890A6",
    width: "90%",
    height: 50,
    marginBottom: 30,
  },
  TextInput: {
    width: "100%",
    flex: 1,
    padding: 10,
    marginLeft: 10,
    color: "#8890A6",
    fontSize: 20,
  },
  Btn: {
    width: "90%",
    backgroundColor: "#BA0913",
    color: "#ffffff",
    borderRadius: 10,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  txt: {
    color: "white",
    fontSize: 19,
  },
});
