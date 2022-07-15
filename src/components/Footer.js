import { StyleSheet, Text, View } from "react-native";
import { black, marginHorizontal, smallFontSize, textBlue } from "../Constants";

const Footer = (props) => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>
        {props.content}
        <Text style={styles.link}>{props.link}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    alignSelf: "stretch",
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
  },
});

export default Footer;
