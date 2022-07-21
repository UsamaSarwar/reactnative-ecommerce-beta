import { StyleSheet, View } from "react-native";
import CustomTextInput from "../components/CustomTextInput";
import Header from "../components/Header";
import LargeBlackButton from "../components/LargeBlackButton";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

const Signup = () => {
  const [isValid, setIsValid] = useState(false);
  const [reqData, setReqData] = useState({});
  const [isNameValid, setIsNameValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [isDateValid, setIsDateValid] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (isPasswordValid && isEmailValid && isPhoneValid && isDateValid) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [isPasswordValid, isEmailValid, isPhoneValid, isDateValid]);

  return (
    <View style={styles.container}>
      <Header content="Personal details" flex={2} />
      <CustomTextInput
        type="Email"
        setIsValid={setIsEmailValid}
        required={true}
        toggleError={error}
        setReqData={setReqData}
        reqData={reqData}
      ></CustomTextInput>
      <CustomTextInput
        type="Name"
        setIsValid={setIsNameValid}
        required={true}
        toggleError={error}
        setReqData={setReqData}
        reqData={reqData}
      ></CustomTextInput>
      <CustomTextInput
        type="Password"
        setIsValid={setIsPasswordValid}
        required={true}
        toggleError={error}
        setReqData={setReqData}
        reqData={reqData}
      ></CustomTextInput>
      <CustomTextInput
        type="Phone"
        setIsValid={setIsPhoneValid}
        required={true}
        toggleError={error}
        setReqData={setReqData}
        reqData={reqData}
      ></CustomTextInput>
      <CustomTextInput
        type="Date of birth"
        setIsValid={setIsDateValid}
        required={true}
        toggleError={error}
        setReqData={setReqData}
        reqData={reqData}
      ></CustomTextInput>

      <CustomTextInput
        type="Address"
        required={false}
        setReqData={setReqData}
        reqData={reqData}
      ></CustomTextInput>
      <LargeBlackButton
        btnText="Sign Up"
        isValid={isValid}
        setError={setError}
        changeTo="goBack"
        req={reqData}
      ></LargeBlackButton>
      <Footer content="Already have an account?" link="Sign In"></Footer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "space-around",
  },
});

export default Signup;
