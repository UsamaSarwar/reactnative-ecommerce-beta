import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { marginHorizontal, marginVertical } from "../utils/Constants";
import { CheckBox } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

const ShippingAddressCard = () => {
  const [tick, setTick] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.line1}>
        <Text style={styles.name}>John Doe</Text>
        <Text
          style={styles.change}
          onPress={() => {
            navigation.navigate("AddAddress");
          }}
        >
          Edit
        </Text>
      </View>
      <View>
        <Text>3 NewBridge Court</Text>
      </View>
      <View>
        <Text>Chino Hills, CA 91709, United States</Text>
      </View>
      <View style={styles.checkbox}>
        <CheckBox
          title="Use as the shipping address"
          checked={tick}
          onPress={() => {
            setTick(!tick);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    // width: "80%",
    margin: 8,
    // elevation: 5,
    //backgroundColor: "#849DFE",
    borderColor: "#849DFE",
    borderWidth: 2,
    borderRadius: 15,
  },
  line1: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  checkbox: {
    marginLeft: -20,
  },
  name: {},
  change: {
    color: "blue",
    fontSize: 16,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  line2: {},
  line3: {},
});

export default ShippingAddressCard;
