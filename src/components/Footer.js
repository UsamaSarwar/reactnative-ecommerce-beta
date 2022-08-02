import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  black,
  marginHorizontal,
  marginVertical,
  smallFontSize,
  orange,
} from "../utils/Constants";

const Footer = (props) => {
  const navigation = useNavigation();

  const onPress = () => {
    if (props.link == "Sign Up") {
      navigation.navigate("Signup");
    }
    if (props.link == "Sign In") {
      navigation.goBack();
    }

    if (props.link == "Forgot your password?") {
      navigation.navigate("ForgotPassword");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.footer}>
        <Text style={styles.text}>
          {props.content}
          <Text style={styles.link} onPress={onPress}>
            {props.link}
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    color: orange,
    flex: 1.5,
    justifyContent: "flex-end",
  },
  footer: {
    marginBottom: marginVertical,
    alignSelf: "center",
  },
  text: {
    marginHorizontal: marginHorizontal,
    color: black,
    fontSize: smallFontSize,
  },
  link: {
    marginHorizontal: marginHorizontal,
    color: black,
    fontSize: smallFontSize,
    fontWeight: "bold",
    textDecorationLine: "underline",
    backgroundColor: orange,
  },
});

export default Footer;
