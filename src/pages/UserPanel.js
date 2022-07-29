import { StyleSheet, Text, View } from "react-native";
import LargeBlackButton from "../components/LargeBlackButton";
import Header from "../components/Header";

const UserPanel = ({ token, admin }) => {
  return (
    <View style={styles.container}>
      <Header content="User Panel" flex={0.2} />
      <View style={styles.buttons}>
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
        <LargeBlackButton
          changeTo="AddProduct"
          btnText="Add a Product"
          isValid={true}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  head: {
    marginTop: 5,
  },
  buttons: {
    flex: 1,
    // justifyContent: "space-evenly",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
  },
});

export default UserPanel;
