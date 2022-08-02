import { StyleSheet, Text, View } from "react-native";
import LargeBlackButton from "../components/LargeBlackButton";
import Header from "../components/Header";
import CustomTextInput from "../components/CustomTextInput";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { setReq } from "../features/api";

const ChangePassword = ({ route }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    dispatch(setReq({ property: "token", value: token }));
  }, []);

  return (
    <View style={styles.container}>
      <Header content="Change Password" flex={0.5} back={true} />

      <CustomTextInput
        type="prevPassword"
        placeholderText="Current Password"
        required={true}
      />

      <CustomTextInput
        type="newPassword"
        placeholderText="New Password"
        required={true}
      />

      <CustomTextInput
        type="password"
        placeholderText="Retype New Password"
        required={true}
      />
      <LargeBlackButton
        btnText="Confirm Change Password"
        changeTo="HomePage"
        fields={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {},
  head: {
    marginTop: 5,
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 50,
  },
});

export default ChangePassword;
