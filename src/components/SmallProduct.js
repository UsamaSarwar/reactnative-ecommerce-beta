import { useEffect, useState } from "react";
import { Image, StyleSheet, View, Text } from "react-native";

const SmallProduct = ({ product, admin }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require("../../assets/public/images/pngwing.png")}
      />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>$ {product.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F8FA",
    margin: 15,
    padding: 15,
  },
  img: { flex: 1, alignSelf: "center" },
  name: {},
  price: {},
});

export default SmallProduct;
