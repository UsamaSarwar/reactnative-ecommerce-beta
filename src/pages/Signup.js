import { StyleSheet, View } from "react-native";
import CustomTextInput from "../components/CustomTextInput";
import Header from "../components/Header";
import LargeBlackButton from "../components/LargeBlackButton";
import Footer from "../components/Footer";

const Signup = () => {
  return (
    <View style={styles.container}>
      <Header content="Personal details"></Header>
      <CustomTextInput type="Email" required={true}></CustomTextInput>
      <CustomTextInput type="Password" required={true}></CustomTextInput>
      <CustomTextInput type="Phone" required={true}></CustomTextInput>
      <CustomTextInput type="Date of birth" required={true}></CustomTextInput>
      <CustomTextInput type="Address" required={true}></CustomTextInput>
      <LargeBlackButton btnText="Sign Up" changeTo="goBack"></LargeBlackButton>
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
