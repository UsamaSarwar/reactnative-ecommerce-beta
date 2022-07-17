import { StyleSheet, View } from "react-native";
import CustomTextInput from "../components/CustomTextInput";
import Header from "../components/Header";
import LargeBlackButton from "../components/LargeBlackButton";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

const Signup = () => {
  const [isValid, setIsValid] = useState(false);
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
      <Header content="Personal details"></Header>
      <CustomTextInput
        type="Email"
        setIsValid={setIsEmailValid}
        required={true}
        error={error}
      ></CustomTextInput>
      <CustomTextInput
        type="Password"
        setIsValid={setIsPasswordValid}
        required={true}
        error={error}
      ></CustomTextInput>
      <CustomTextInput
        type="Phone"
        setIsValid={setIsPhoneValid}
        required={true}
        error={error}
      ></CustomTextInput>
      <CustomTextInput
        type="Date of birth"
        setIsValid={setIsDateValid}
        required={true}
        error={error}
      ></CustomTextInput>
      <CustomTextInput type="Address" required={false}></CustomTextInput>
      <LargeBlackButton
        btnText="Sign Up"
        isValid={isValid}
        setError={setError}
        changeTo="goBack"
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
