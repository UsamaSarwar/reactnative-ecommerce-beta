import { StyleSheet, Text, View } from "react-native";
import { marginHorizontal, marginVertical } from "../utils/Constants";
import Chip from "../../assets/public/svgs/Chip.js";

const PaymentCard = ({ type, number, name, expDate }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.chip}>
          <Chip height={40} width={40} />
        </View>
        <View style={styles.test}>
          <Text style={styles.number}>**** **** **** {number}</Text>
          <View style={styles.cardBottom}>
            <View>
              <Text style={styles.label}>Card Holder Name</Text>
              <Text style={styles.value}>{name}</Text>
            </View>
            <View>
              <Text style={styles.label}>Expiry Date</Text>
              <Text style={styles.value}>{expDate}</Text>
            </View>
          </View>
        </View>
      </View>
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
  container: {},
  card: {
    backgroundColor: "#000000",
    borderRadius: 15,
    marginHorizontal: 20,
    marginVertical: 10,
    flex: 1,
    height: 216,
    // width: 344,
  },
});

export default PaymentCard;
