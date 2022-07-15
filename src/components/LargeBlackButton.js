import { Button, StyleSheet, View } from "react-native";
import { black, marginHorizontal } from "../Constants";

const LargeBlackButton = (props) => {
  return (
    <View style={styles.container}>
      <Button title={props.btnText} color={black} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: marginHorizontal,
  },
});

export default LargeBlackButton;
