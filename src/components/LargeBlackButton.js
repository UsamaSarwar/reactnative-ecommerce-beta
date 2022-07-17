import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ToastAndroid,
  Alert,
} from "react-native";
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
    if (props.isValid) {
      if (props.changeTo == "goBack") {
        if (props.btnText == "Sign Up") {
          Alert.alert("New account created");
        }
        navigation.goBack();
      } else {
        console.log(props.isValid);
        navigation.navigate(props.changeTo);
      }
    } else {
      props.setError(true);
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
    height: 50,
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
