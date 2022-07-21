import { set } from "mongoose";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { marginHorizontal, marginVertical } from "../utils/Constants";

const CustomDropDown = ({
  itemList,
  placeholderText,
  setReqData,
  reqData,
  type,
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState();

  useEffect(() => {
    setItems(itemList);
  }, [itemList]);

  useEffect(() => {
    let temp = {};
    temp[type] = value;
    setReqData({ ...reqData, ...temp });
  }, [value]);

  return (
    <View
      style={{
        marginHorizontal: marginHorizontal,
        marginTop: marginVertical,
      }}
    >
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        listMode="MODAL"
        placeholder={placeholderText}
        style={styles.dropdown}
        showArrowIcon={true}
        dropDownContainerStyle={styles.dropdown}
      ></DropDownPicker>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    backgroundColor: "whitesmoke",
    borderRadius: 2,
  },
  dropdownContainer: {
    height: 500,
    backgroundColor: "whitesmoke",
    borderRadius: 2,
  },
});

export default CustomDropDown;
