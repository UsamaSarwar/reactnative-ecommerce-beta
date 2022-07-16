import { StyleSheet, View } from "react-native";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeBlackButton from "../components/LargeBlackButton";
import TextInputField from "../components/TextInputField";

const ForgotPassword = () => {
  return (
    <View style={styles.container}>
      <Header content="Login" />
      <TextInputField placeholderText="Email" />
      <TextInputField placeholderText="password" />
      <LargeBlackButton btnText="LOGIN" />
      <Footer content="Forgot your password?" link="" />
      <FacebookButton />
      <Footer content="Don't have an account? " link="Sign Up" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

export default ForgotPassword;
