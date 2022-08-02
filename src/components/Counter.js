import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../features/cart";
import { counterButtonSize } from "../utils/Constants";
import Minus from "./icons/Minus";
import Plus from "./icons/Plus";

const mult = 1.3;

const Counter = ({ count, _id, big }) => {
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(addToCart({ _id }));
  };
  const decrement = () => {
    dispatch(removeFromCart(_id));
  };
  const size = big ? counterButtonSize * mult : counterButtonSize;
  return (
    <View style={styles.counter}>
      <TouchableOpacity
        style={big ? styles.bigCounterButton : styles.counterButton}
        onPress={decrement}
      >
        <Minus size={size} />
      </TouchableOpacity>
      <Text
        style={[
          styles.counterText,
          big && { fontSize: 30, width: 50, marginTop: 5 },
        ]}
      >
        {count}
      </Text>
      <TouchableOpacity
        style={big ? styles.bigCounterButton : styles.counterButton}
        onPress={increment}
      >
        <Plus size={size} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  counter: {
    flexDirection: "row",
    // alignSelf: "stretch",
    alignItems: "center",
    // backgroundColor: "yellow",
  },
  counterButton: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: counterButtonSize / 2,
    marginHorizontal: 10,
    overflow: "hidden",
    height: counterButtonSize,
    width: counterButtonSize,
    backgroundColor: "black",
  },
  bigCounterButton: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: (counterButtonSize * mult) / 2,
    marginHorizontal: 10,
    overflow: "hidden",
    height: counterButtonSize * mult,
    width: counterButtonSize * mult,
    backgroundColor: "black",
  },
  counterText: {
    fontSize: 20,
    width: 30,
    textAlign: "center",
  },
});

export default Counter;
