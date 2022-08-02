import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import {
  buttonFontSize,
  grey,
  marginHorizontal,
  smallFontSize,
} from "../utils/Constants";

const TotalAmmountLabel = () => {
  const total = useSelector((state) => {
    return state.cart.items.reduce((sum, { price, quantity }) => {
      return sum + price * quantity;
    }, 0);
  });
  // const total = "9,800";
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>Total:</Text>
        <Text style={styles.text}>$ {total}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "blue",
    borderColor: "#CBD0D3",
    borderTopWidth: 1,
    // backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch",
    marginHorizontal: 20,
    paddingVertical: 15,
    paddingRight: 5,
  },
  text: {
    fontSize: buttonFontSize,
  },
});

export default TotalAmmountLabel;
