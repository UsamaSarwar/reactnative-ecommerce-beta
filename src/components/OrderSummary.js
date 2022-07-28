import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { marginHorizontal, marginVertical } from "../utils/Constants";
import LargeBlackButton from "../components/LargeBlackButton";

const OrderSummary = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line1}>
        <Text style={styles.name}>Order:</Text>
        <Text style={styles.change}>USD $ 112</Text>
      </View>
      <View style={styles.line1}>
        <Text style={styles.name}>Delivery:</Text>
        <Text style={styles.change}>USD $ 15</Text>
      </View>
      <View style={styles.line1}>
        <Text style={styles.name}>Summary:</Text>
        <Text style={styles.change}>USD $ 127</Text>
      </View>
      <View style={styles.btn}>
        <LargeBlackButton btnText="Submit Order" changeTo="ContinueShopping" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  btn: {
    // backgroundColor: "#000DAE",
    height: 50,
    justifyContent: "center",
    // marginTop: 20,
    marginBottom: 30,
    // backgroundColor: "black",
  },
  btnText: {
    color: "#ffffff",
    alignSelf: "center",
  },
  img: {
    backgroundColor: "#000000",
    height: 42,
    width: 70,
    marginRight: 20,
    borderRadius: 30,
  },
  container: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  line1: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  line2: {
    flexDirection: "row",
    marginTop: 15,
    // alignSelf: "flex-start",
  },
  cardNum: {
    alignSelf: "center",
  },
});

export default OrderSummary;
