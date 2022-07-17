import { ScrollView, StyleSheet, View } from "react-native";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeBlackButton from "../components/LargeBlackButton";
import CustomTextInput from "../components/CustomTextInput";
import FacebookButton from "../components/FacebookButton";
import { useEffect, useState } from "react";

const Login = ({ navigation }) => {
  const [isValid, setIsValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (isPasswordValid && isEmailValid) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [isPasswordValid, isEmailValid]);

  return (
    <View style={styles.container}>
      <Header content="Login" />
      <CustomTextInput
        type="Email"
        setIsValid={setIsEmailValid}
        required={true}
        error={error}
      />
      <CustomTextInput
        type="Password"
        setIsValid={setIsPasswordValid}
        required={true}
        error={error}
      />
      <LargeBlackButton
        btnText="LOGIN"
        isValid={isValid}
        changeTo="HomePage"
        setError={setError}
      />
      <Footer content="Forgot your password?" link="" />
      <FacebookButton />
      <Footer content="Don't have an account? " link="Sign Up" />
    </View>
  );
};

const styles = StyleSheet.create({
  head: {
    marginTop: 5,
  },

  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
});

export default Login;
