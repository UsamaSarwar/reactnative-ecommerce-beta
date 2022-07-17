import { ScrollView, StyleSheet, View } from "react-native";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeBlackButton from "../components/LargeBlackButton";
import CustomTextInput from "../components/CustomTextInput";
import FacebookButton from "../components/FacebookButton";
import PasswordComponent from "../components/PasswordComponent";

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header content="Login" />
      <CustomTextInput type="Email" required={true} />
      <CustomTextInput type="Password" required={true} />
      <LargeBlackButton btnText="LOGIN" changeTo="HomePage" />
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
