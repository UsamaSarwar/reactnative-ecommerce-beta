import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ShippingAddressCard from "../components/ShippingAddressCard";
import Header from "../components/Header";
import PaymentSection from "../components/PaymentSection";
import DeliveryCard from "../components/DeliveryCard";
import OrderSummary from "../components/OrderSummary";

const Checkout = () => {
  return (
    <View style={styles.container}>
      <Header content="Checkout" />
      <View>
        <Text style={styles.address}>Shipping Address</Text>
        <ShippingAddressCard />
      </View>
      <PaymentSection />
      <DeliveryCard />
      <OrderSummary />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "space-evenly",
    // height: "90%",
  },
  address: {
    marginHorizontal: 15,
  },
});

export default Checkout;
