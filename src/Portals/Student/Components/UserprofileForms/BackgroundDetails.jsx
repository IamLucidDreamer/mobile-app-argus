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
import MultiSelect from "react-native-multiple-select";

const BackgroundDetails = () => {
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState([]);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  console.log(user);

  const PersonalDetailsSchema = Yup.object().shape({
    hasCriminalRecord: Yup.string().required("Required"),
    hasVechicle: Yup.string().required("Required"),
    hasLicenseToDrive: Yup.string().required("Required"),
    levelOfEducation: Yup.string().required("Required"),
    languagesKnown: Yup.string().required("Required"),
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
        Background Details
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
            hasCriminalRecord: user?.hasCriminalRecord,
            hasVechicle: user?.hasVechicle,
            hasLicenseToDrive: user?.hasLicenseToDrive,
            levelOfEducation: user?.levelOfEducation,
            languagesKnown: "",
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
                <Picker
                  style={styles.TextInput}
                  onValueChange={formProps.handleChange("hasCriminalRecord")}
                  onBlur={formProps.handleBlur("hasCriminalRecord")}
                  value={user?.hasCriminalRecord}
                >
                  <Picker.Item label="Do you have criminal record." value="" />
                  <Picker.Item label="Yes" value="yes" />
                  <Picker.Item label="No" value="no" />
                </Picker>
                {formProps.errors.hasCriminalRecord &&
                formProps.touched.hasCriminalRecord ? (
                  <Text style={{ color: "#8890A6" }}>
                    {formProps.errors.hasCriminalRecord}
                  </Text>
                ) : null}
              </View>
              <View style={styles.inputView}>
                <Picker
                  style={styles.TextInput}
                  onValueChange={formProps.handleChange("hasVechicle")}
                  onBlur={formProps.handleBlur("hasVechicle")}
                  value={user?.hasVechicle}
                >
                  <Picker.Item label="Do you own a Vehicle." value="" />
                  <Picker.Item label="Yes" value="yes" />
                  <Picker.Item label="No" value="no" />
                </Picker>
                {formProps.errors.hasVechicle &&
                formProps.touched.hasVechicle ? (
                  <Text style={{ color: "#8890A6" }}>
                    {formProps.errors.hasVechicle}
                  </Text>
                ) : null}
              </View>
              <View style={styles.inputView}>
                <Picker
                  style={styles.TextInput}
                  onValueChange={formProps.handleChange("hasLicenseToDrive")}
                  onBlur={formProps.handleBlur("hasLicenseToDrive")}
                  value={user?.hasLicenseToDrive}
                >
                  <Picker.Item label="Do you have license to Drive." value="" />
                  <Picker.Item label="Yes" value="yes" />
                  <Picker.Item label="No" value="no" />
                </Picker>
                {formProps.errors.hasLicenseToDrive &&
                formProps.touched.hasLicenseToDrive ? (
                  <Text style={{ color: "#8890A6" }}>
                    {formProps.errors.hasLicenseToDrive}
                  </Text>
                ) : null}
              </View>
              <View style={styles.inputView}>
                <Picker
                  style={styles.TextInput}
                  onValueChange={formProps.handleChange("levelOfEducation")}
                  onBlur={formProps.handleBlur("levelOfEducation")}
                  value={user?.levelOfEducation}
                >
                  <Picker.Item
                    label="What is your Highest level of Education."
                    value=""
                  />
                  <Picker.Item
                    label=" None or Less Than High School"
                    value=" None or Less Than High School"
                  />
                  <Picker.Item
                    label="High School Graduate"
                    value="High School Graduate"
                  />
                  <Picker.Item
                    label="One or Two years program in a College or a University"
                    value="One or Two years program in a College or a University"
                  />
                  <Picker.Item
                    label="Bachelor's degree"
                    value="Bachelor's degree"
                  />
                  <Picker.Item
                    label="Master's Degree"
                    value="Master's Degree"
                  />
                  <Picker.Item
                    label="Doctoral degree"
                    value="Doctoral degree"
                  />
                  <Picker.Item label="Others" value="Others" />
                </Picker>
                {formProps.errors.levelOfEducation &&
                formProps.touched.levelOfEducation ? (
                  <Text style={{ color: "#8890A6" }}>
                    {formProps.errors.levelOfEducation}
                  </Text>
                ) : null}
              </View>
              <View style={styles.inputView}>
                <MultiSelect
                  hideTags
                  items={items}
                  uniqueKey="id"
                  onSelectedItemsChange={(changedItems) =>
                    setLanguage(changedItems)
                  }
                  selectedItems={language}
                  selectText="Pick Items"
                  searchInputPlaceholderText="Search Items..."
                  onChangeInput={(text) => console.log(text)}
                  tagRemoveIconColor="#CCC"
                  tagBorderColor="#CCC"
                  tagTextColor="#CCC"
                  selectedItemTextColor="#CCC"
                  selectedItemIconColor="#CCC"
                  itemTextColor="#000"
                  displayKey="name"
                  searchInputStyle={{ color: "#CCC" }}
                  submitButtonColor="#CCC"
                  submitButtonText="Submit"
                />
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

export default BackgroundDetails;

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

const items = [
  {
    id: "92iijs7yta",
    name: "Ondo",
  },
  {
    id: "a0s0a8ssbsd",
    name: "Ogun",
  },
  {
    id: "16hbajsabsd",
    name: "Calabar",
  },
  {
    id: "nahs75a5sg",
    name: "Lagos",
  },
  {
    id: "667atsas",
    name: "Maiduguri",
  },
  {
    id: "hsyasajs",
    name: "Anambra",
  },
  {
    id: "djsjudksjd",
    name: "Benue",
  },
  {
    id: "sdhyaysdj",
    name: "Kaduna",
  },
  {
    id: "suudydjsjd",
    name: "Abuja",
  },
];
