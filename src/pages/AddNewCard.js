import { CheckBox } from "@rneui/themed";
import { useState } from "react";
import { View, StyleSheet } from "react-native";
import CustomTextInput from "../components/CustomTextInput";
import Header from "../components/Header";
import LargeBlackButton from "../components/LargeBlackButton";
import DropDownPicker from "react-native-dropdown-picker";

const AddNewCard = () => {
  const [checked, setChecked] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Mastercard", value: "mastercard" },
    { label: "Visa", value: "visa" },
  ]);

  return (
    <View style={styles.container}>
      <Header content="Add new card" back={true} />
      <CustomTextInput
        type="name"
        placeholderText="Name on card"
        required={true}
      />
      <CustomTextInput
        type="number"
        placeholderText="Card number"
        required={true}
      />
      <View style={styles.dropDown}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
      </View>
      <CustomTextInput
        type="date"
        placeholderText="Expire Date"
        required={true}
      />
      <CustomTextInput type="number" placeholderText="CVV" required={true} />
      <CheckBox
        title="Set as default payment method"
        checked={checked}
        onPress={() => {
          setChecked(!checked);
        }}
      />

      <LargeBlackButton btnText="ADD CARD" changeTo="Checkout" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  dropDown: {
    marginHorizontal: 35,
  },
});

export default AddNewCard;
