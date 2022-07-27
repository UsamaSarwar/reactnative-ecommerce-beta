import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { marginHorizontal, marginVertical } from "../utils/Constants";

const PaymentSection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line1}>
        <Text style={styles.name}>Payment</Text>
        <Text style={styles.change}>Change</Text>
      </View>
      <View style={styles.line2}>
        <Image
          style={styles.img}
          resizeMethod="resize"
          source={require("../../assets/mastercard.png")}
        />
        <Text style={styles.cardNum}>**** **** **** 3947</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default PaymentSection;
