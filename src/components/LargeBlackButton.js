import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  black,
  marginHorizontal,
  marginVertical,
  smallFontSize,
} from "../utils/Constants";
import { useNavigation } from "@react-navigation/native";

const LargeBlackButton = (props) => {
  const navigation = useNavigation();

  const onPress = () => {
    if (props.changeTo == "goBack") {
      navigation.goBack();
    } else {
      navigation.navigate(props.changeTo);
    }
  };

  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.text}>{props.btnText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    flex: 0.5,
    justifyContent: "center",
    marginTop: marginVertical,
    alignItems: "center",
    marginHorizontal: marginHorizontal,
    backgroundColor: black,
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
