import { View, StyleSheet, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import AddressCard from "../components/AddressCard";
import Add from "../../assets/public/svgs/Add";
import { useNavigation } from "@react-navigation/native";

const ShippingAddress = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header content="Shipping Addresses" />
      <AddressCard />
      <AddressCard />
      <AddressCard />
      <AddressCard />

      <TouchableOpacity
        style={styles.add}
        activeOpacity={0.5}
        onPress={() => {
          navigation.navigate("AddAddress");
        }}
      >
        <Add width={70} height={70} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
  },
  add: {
    position: "absolute",
    bottom: 10,
    right: 5,
    resizeMode: "contain",
    height: 60,
    zIndex: 1,
    // backgroundColor: "blue",
  },
});

export default ShippingAddress;
