import { StyleSheet, View } from "react-native";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeBlackButton from "../components/LargeBlackButton";
import CustomTextInput from "../components/CustomTextInput";

const ForgotPassword = () => {
  return (
    <View style={styles.container}>
      <Header content="Forgot password" />
      <Footer
        content="Please enter your email address. You will receive a link you will receive a link to create a new password via email"
        link=""
      />
      <CustomTextInput type="Email" required={true} />
      <LargeBlackButton btnText="Send" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "space-evenly",
  },
});

export default ForgotPassword;
