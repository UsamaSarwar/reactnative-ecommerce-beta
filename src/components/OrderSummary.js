import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { marginHorizontal, marginVertical } from "../utils/Constants";

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
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Submit Order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  btn: {
    backgroundColor: "#000DAE",
    height: 50,
    justifyContent: "center",
    marginTop: 20,
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
