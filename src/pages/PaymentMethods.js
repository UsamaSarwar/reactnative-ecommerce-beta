import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import { CheckBox } from "@rneui/themed";
import PaymentCard from "../components/PaymentCard";
import Header from "../components/Header";
import { useState } from "react";
import { marginHorizontal } from "../utils/Constants";
import Add from "../../assets/public/svgs/Add";
import { useNavigation } from "@react-navigation/native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    type: "visa",
    number: 1234,
    name: "John Doe 0",
    expDate: "07/21",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    type: "visa",
    number: 5678,
    name: "John Doe 1",
    expDate: "07/21",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    type: "visa",
    number: 9101,
    name: "John Doe 2",
    expDate: "07/21",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d88",
    type: "visa",
    number: 9101,
    name: "John Doe 2",
    expDate: "07/21",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d99",
    type: "visa",
    number: 9101,
    name: "John Doe 2",
    expDate: "07/21",
  },
];

const PaymentMethods = () => {
  const navigation = useNavigation();
  const [cashOnDelivery, setCashOnDelivery] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const checkCash = () => {
    setCashOnDelivery(true);
    setSelectedId(null);
  };

  const rItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#000000" : "#9B9B9B";

    const checkCard = () => {
      setSelectedId(item.id);
      setCashOnDelivery(false);
    };

    return (
      <PaymentCard
        item={item}
        onPress={checkCard}
        backgroundColor={{ backgroundColor }}
        selectedId={selectedId}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Header content="Payment methods" />
      <View style={styles.cashStyle}>
        <CheckBox
          title="Cash on delivery"
          checked={cashOnDelivery}
          style={styles.cash}
          onPress={checkCash}
        ></CheckBox>
      </View>

      <View>
        <FlatList
          contentContainerStyle={styles.contentContainer}
          data={DATA}
          renderItem={rItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
      </View>

      <TouchableOpacity
        style={styles.add}
        activeOpacity={0.5}
        onPress={() => {
          navigation.navigate("AddNewCard");
        }}
      >
        <Add width={70} height={70} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cashStyle: {
    marginLeft: 20,
  },
  add: {
    position: "absolute",
    bottom: 10,
    right: 5,
    resizeMode: "contain",
    height: 60,
    // backgroundColor: "blue",
  },
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#ffffff",
    // backgroundColor: "red",
  },
  cash: {
    padding: 20,
  },
  contentContainer: {
    paddingBottom: 130,
  },
});

export default PaymentMethods;
