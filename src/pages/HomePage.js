import { StyleSheet, Text, View } from "react-native";
import LargeBlackButton from "../components/LargeBlackButton";
import Header from "../components/Header";

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Header content="Home Page" flex={1} />
      <LargeBlackButton
        changeTo="ChangePassword"
        btnText="Change Password"
        isValid={true}
      />
      <LargeBlackButton
        changeTo="DeleteAccount"
        btnText="Delete Account"
        isValid={true}
      />
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
    alignItems: "stretch",
  },
});

export default HomePage;
