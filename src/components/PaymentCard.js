import { StyleSheet, Text, View } from "react-native";
import { marginHorizontal, marginVertical } from "../utils/Constants";
import Chip from "../../assets/public/svgs/Chip.js";
import { CheckBox } from "@rneui/themed";

const PaymentCard = ({ item, onPress, backgroundColor, selectedId }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.card, backgroundColor]}>
        <View style={styles.chip}>
          <Chip height={40} width={40} />
        </View>
        <View style={styles.test}>
          <Text style={styles.number}>**** **** **** {item.number}</Text>
          <View style={styles.cardBottom}>
            <View>
              <Text style={styles.label}>Card Holder Name</Text>
              <Text style={styles.value}>{item.name}</Text>
            </View>
            <View>
              <Text style={styles.label}>Expiry Date</Text>
              <Text style={styles.value}>{item.expDate}</Text>
            </View>
          </View>
        </View>
      </View>

      <CheckBox
        title="Use as default payment method"
        checked={item.id === selectedId}
        onPress={onPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  number: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "bold",
    marginHorizontal: 20,
  },
  label: {
    fontSize: 12,
    color: "#ffffff",
  },
  value: {
    color: "#ffffff",
    justifyContent: "flex-end",
    fontSize: 16,
    fontWeight: "bold",
  },
  chip: { padding: 20 },
  container: { margin: 15, backgroundColor: "#ffffff" },
  card: {
    // backgroundColor: "#9B9B9B",
    borderRadius: 15,
    marginHorizontal: 20,
    marginVertical: 10,
    flex: 1,
    height: 216,
    elevation: 10,
    shadowOpacity: 0.36,
    // width: 344,
  },
});

export default PaymentCard;
