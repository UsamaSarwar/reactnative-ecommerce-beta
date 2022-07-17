import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { black, marginHorizontal, marginVertical } from "../utils/Constants";

const Header = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{props.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: "flex-end",
  },
  heading: {
    marginHorizontal: marginHorizontal,
    marginVertical: marginVertical,
    alignSelf: "center",
    color: black,
    fontSize: 34,
    fontWeight: "bold",
    // marginTop: 100,
  },
});

export default Header;
