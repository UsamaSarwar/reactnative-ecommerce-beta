import { StyleSheet, Text, View } from "react-native";
import LargeBlackButton from "../components/LargeBlackButton";
import Header from "../components/Header";
import CustomTextInput from "../components/CustomTextInput";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

const ChangePassword = ({ route }) => {
  const [isValid, setIsValid] = useState(false);
  const [reqData, setReqData] = useState({});
  const [isOldPasswordValid, setIsOldPasswordValid] = useState(false);
  const [isNewPasswordValid, setIsNewPasswordValid] = useState(false);
  const [error, setError] = useState(false);
  const [oldPassword, setOldPassword] = useState({});
  const [newPassword, setNewPassword] = useState({});

  useEffect(() => {
    if (oldPassword && newPassword) {
      if (isNewPasswordValid && isOldPasswordValid) {
        setIsValid(true);
        // setReqData({oldPassword: oldPassword.})
        setReqData({
          oldPassword: oldPassword.password,
          newPassword: newPassword.password,
          token: route.params.token,
        });
      }
    }
  }, [oldPassword, newPassword]);

  return (
    <View style={styles.container}>
      <Header content="Change Password" flex={1.5} />

      <CustomTextInput
        type="password"
        setIsValid={setIsOldPasswordValid}
        required={true}
        toggleError={error}
        setReqData={setOldPassword}
        reqData={oldPassword}
      />

      <CustomTextInput
        type="password"
        setIsValid={setIsNewPasswordValid}
        required={true}
        toggleError={error}
        setReqData={setNewPassword}
        reqData={newPassword}
      />
      <LargeBlackButton
        btnText="Confirm Change Password"
        isValid={isValid}
        changeTo="HomePage"
        setError={setError}
        req={reqData}
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
  },
});

export default ChangePassword;
