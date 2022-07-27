import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { marginHorizontal, marginVertical } from "../utils/Constants";

const DeliveryCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line1}>
        <Text style={styles.name}>Delivery method</Text>
      </View>
      <View style={styles.line2}>
        <Image
          style={styles.img}
          resizeMethod="scale"
          source={require("../../assets/fedex.png")}
        />
        <Image style={styles.img} source={require("../../assets/usps.png")} />
        <Image style={styles.img} source={require("../../assets/dhl.png")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    // backgroundColor: "#000000",
    height: 80,
    width: 100,
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
  },
  cardNum: {
    alignSelf: "center",
  },
});

export default DeliveryCard;
