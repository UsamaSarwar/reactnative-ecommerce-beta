import { StyleSheet, View, Text } from "react-native";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeBlackButton from "../components/LargeBlackButton";
import CustomTextInput from "../components/CustomTextInput";
import FacebookButton from "../components/FacebookButton";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { black, marginVertical, smallFontSize } from "../utils/Constants";

const Login = ({ setData }) => {
  const [isValid, setIsValid] = useState(false);
  const [reqData, setReqData] = useState({});
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [error, setError] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    if (isPasswordValid && isEmailValid) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [isPasswordValid, isEmailValid]);

  const onPress = () => {
    navigation.navigate("ForgotPassword");
  };

  return (
    <View style={styles.container}>
      <Header content="Login" flex={2} />
      <CustomTextInput
        type="Email"
        setIsValid={setIsEmailValid}
        required={true}
        toggleError={error}
        setReqData={setReqData}
        reqData={reqData}
      />
      <CustomTextInput
        type="Password"
        setIsValid={setIsPasswordValid}
        required={true}
        toggleError={error}
        setReqData={setReqData}
        reqData={reqData}
      />
      <LargeBlackButton
        btnText="LOGIN"
        isValid={isValid}
        changeTo="HomePage"
        setError={setError}
        req={reqData}
        setData={setData}
      />
      <View style={styles.forgetPassContainer}>
        <Text onPress={onPress} style={styles.link}>
          Forgot your password?
        </Text>
      </View>
      <FacebookButton />
      <Footer content="Don't have an account? " link="Sign Up" />
    </View>
  );
};

const styles = StyleSheet.create({
  forgetPassContainer: {
    flex: 2,
  },
  head: {
    marginTop: 5,
  },

  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  link: {
    alignSelf: "center",
    fontSize: smallFontSize,
    marginVertical: marginVertical,
    textDecorationLine: "underline",
    color: black,
  },
});

export default Login;
