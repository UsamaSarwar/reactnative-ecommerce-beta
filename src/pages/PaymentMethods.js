import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { CheckBox } from "@rneui/themed";
import PaymentCard from "../components/PaymentCard";
import Header from "../components/Header";
import { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { marginHorizontal } from "../utils/Constants";

const DATA = [
  {
    type: "visa",
    number: 1234,
    name: "John Doe",
    expDate: "07/21",
  },
  {
    type: "visa",
    number: 1234,
    name: "John Doe",
    expDate: "07/21",
  },
  {
    type: "visa",
    number: 1234,
    name: "John Doe",
    expDate: "07/21",
  },
];

const PaymentMethods = () => {
  const [carda, setCarda] = useState(false);
  const [cardb, setCardb] = useState(false);
  const [cashOnDelivery, setCashOnDelivery] = useState(false);

  const checkCash = () => {
    setCashOnDelivery(true);
    setCarda(false);
    setCardb(false);
  };
  const checkCarda = () => {
    setCashOnDelivery(false);
    setCarda(true);
    setCardb(false);
  };
  const checkCardb = () => {
    setCashOnDelivery(false);
    setCarda(false);
    setCardb(true);
  };

  return (
    <View style={styles.container}>
      <Header content="Payment methods" />
      <ScrollView>
        <CheckBox
          title="Cash on delivery"
          checked={cashOnDelivery}
          style={styles.cash}
          onPress={checkCash}
        ></CheckBox>
        <View
          style={{
            padding: 5,
            backgroundColor: carda ? "#FAFDFF" : "#FFFFFF",
          }}
        >
          <PaymentCard
            type="visa"
            number={1234}
            name="John Doe"
            expDate="07/21"
          />
          <CheckBox
            title="Use as default payment method"
            checked={carda}
            onPress={checkCarda}
          />
        </View>
        <View
          style={{
            padding: 5,
            backgroundColor: cardb ? "#FAFDFF" : "#FFFFFF",
          }}
        >
          <PaymentCard
            type="visa"
            number={1234}
            name="John Doe"
            expDate="07/21"
          />
          <CheckBox
            title="Use as default payment method"
            checked={cardb}
            onPress={checkCardb}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  cash: {
    padding: 20,
  },
});

export default PaymentMethods;
