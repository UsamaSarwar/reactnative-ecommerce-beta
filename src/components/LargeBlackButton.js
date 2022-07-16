import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { black, marginHorizontal, smallFontSize } from "../utils/Constants";

const LargeBlackButton = (props) => {
  const onPress = () => {};

  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.text}>{props.btnText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    alignItems: "center",
    marginHorizontal: marginHorizontal,
    alignSelf: "stretch",
    backgroundColor: black,
    padding: 10,
    borderWidth: 1.5,
    borderRadius: 3,
  },
  text: {
    fontWeight: "500",
    fontSize: smallFontSize,
    color: "#ffffff",
  },
});

export default LargeBlackButton;
