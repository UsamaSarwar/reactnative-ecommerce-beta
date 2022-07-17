import { ScrollView, StyleSheet, Text, View } from "react-native";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeBlackButton from "../components/LargeBlackButton";
import CustomTextInput from "../components/CustomTextInput";
import FacebookButton from "../components/FacebookButton";
import PasswordComponent from "../components/PasswordComponent";

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  head: {
    marginTop: 5,
  },

  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default HomePage;
