import { set } from "mongoose";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { grey, marginHorizontal, marginVertical } from "../utils/Constants";

const CustomDropDown = ({
  itemList,
  placeholderText,
  type,
  required,
  setResult,
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState();

  useEffect(() => {
    setItems(itemList);
  }, [itemList]);

  useEffect(() => {
    setResult(value);
  }, [value]);

  // useEffect(() => {
  //   let temp = {};
  //   temp[type] = value;
  //   setReqData({ ...reqData, ...temp });
  // }, [value]);

  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: 10,
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
        modalContentContainerStyle={styles.modal}
        modalTitleStyle={styles.modalTitle}
      ></DropDownPicker>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    backgroundColor: "whitesmoke",
    borderColor: grey,
    borderRadius: 10,
  },
  dropdownContainer: {
    height: 10,
    backgroundColor: "whitesmoke",
    borderRadius: 2,
  },
  modal: {},
  modalTitle: {
    // backgroundColor: "yellow",
  },
});

export default CustomDropDown;
