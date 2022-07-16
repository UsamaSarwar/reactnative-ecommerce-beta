import { StyleSheet, Text, TouchableOpacity } from "react-native";
import {
  borderBlue,
  buttonFontSize,
  marginHorizontal,
  textBlue,
} from "../utils/Constants";

const FacebookButton = (props) => {
  const onPress = () => {};
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>LOGIN FROM FACEBOOK</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    padding: 10,
    marginHorizontal: marginHorizontal,
    alignSelf: "stretch",
    borderColor: borderBlue,
    borderRadius: 1,
    borderWidth: 1.5,
    backgroundColor: "transparent",
  },
  text: {
    fontWeight: "500",
    fontSize: buttonFontSize,
    color: textBlue,
  },
});

export default FacebookButton;
