import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
} from "react-native";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeBlackButton from "../components/LargeBlackButton";
import CustomTextInput from "../components/CustomTextInput";
import FacebookButton from "../components/FacebookButton";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { black, marginVertical, smallFontSize } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { resetApi } from "../features/api";
import { resetV, resetValidation } from "../features/validation";
import { init } from "../features/validation";

const Login = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(resetApi());
  }, []);

  const onPress = () => {
    navigation.navigate("ForgotPassword");
  };

  return (
    <Pressable
      style={styles.container}
      onPressIn={Keyboard.dismiss}
      accessible={false}
    >
      <View style={styles.container}>
        <Header content="Welcome Back" flex={3} />
        <CustomTextInput type="email" placeholderText="Email" required={true} />
        <CustomTextInput
          type="password"
          placeholderText="Password"
          required={true}
        />
        <LargeBlackButton btnText="LOGIN" changeTo="HomePage" fields={2} />
        <Text onPress={onPress} style={styles.link}>
          Forgot your password?
        </Text>
        <FacebookButton />
        <Footer content="Don't have an account? " link="Sign Up" />
      </View>
    </Pressable>
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
  link: {
    alignSelf: "center",
    fontSize: smallFontSize,
    marginVertical: marginVertical,
    textDecorationLine: "underline",
    color: black,
    flex: 2,
  },
});

export default Login;
