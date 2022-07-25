import { StyleSheet, Text, View } from "react-native";
import LargeBlackButton from "../components/LargeBlackButton";
import Header from "../components/Header";

const ViewProduct = ({ admin }) => {
  return (
    <View style={styles.container}>
      <Header content="User Panel" flex={1} />
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
      {
        <LargeBlackButton
          changeTo="AddProduct"
          btnText="Add a Product"
          isValid={true}
        />
      }
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

export default ViewProduct;
