import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { black, marginHorizontal, marginVertical } from "../utils/Constants";

const Header = (props) => {
  return (
    <View>
      <Text style={styles.heading}>{props.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    marginHorizontal: marginHorizontal,
    marginVertical: marginVertical,
    alignSelf: "stretch",
    color: black,
    fontSize: 34,
    fontWeight: "bold",
    // marginTop: 100,
  },
});

export default Header;
