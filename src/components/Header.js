import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { black, marginHorizontal, marginVertical } from "../utils/Constants";

const Header = ({ flex, content }) => {
  return (
    <View style={{ flex: flex, justifyContent: "flex-end" }}>
      <Text style={styles.heading}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    marginHorizontal: marginHorizontal,
    marginVertical: marginVertical,
    alignSelf: "center",
    color: black,
    fontSize: 34,
    fontWeight: "bold",
  },
});

export default Header;
