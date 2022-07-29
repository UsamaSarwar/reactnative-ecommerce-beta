import { StyleSheet, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import UploadImage from "../components/UploadImage";
import CustomTextInput from "../components/CustomTextInput";
import { useEffect, useState } from "react";
import LargeBlackButton from "../components/LargeBlackButton";
import { marginHorizontal, marginVertical, sizeList } from "../utils/Constants";
import CustomDropDown from "../components/CustomDropDown";
import { useDispatch } from "react-redux";
import { init } from "../features/validation";

const AddProduct = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(init(7));
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <UploadImage flex={1}></UploadImage>
        <CustomTextInput
          placeholderText="Name"
          type="name"
          required={true}
        ></CustomTextInput>
        <CustomTextInput
          placeholderText="Category"
          type="category"
          required={false}
        ></CustomTextInput>
        <CustomTextInput
          placeholderText="Description"
          type="description"
        ></CustomTextInput>
        <CustomTextInput placeholderText="Price" type="price"></CustomTextInput>
        <CustomTextInput
          placeholderText="Discount"
          type="discount"
          required={true}
        ></CustomTextInput>
        <CustomTextInput placeholderText="Stock" type="stock"></CustomTextInput>
        <CustomTextInput placeholderText="Brand" type="brand"></CustomTextInput>
        {/* <CustomDropDown
          itemList={sizeList}
          placeholderText="Select a size"
          type="size"
          setReqData={setReqData}
          reqData={reqData}
        ></CustomDropDown> */}
        <LargeBlackButton
          btnText="Add Product"
          changeTo="goBack"
        ></LargeBlackButton>
        <View style={{ flex: 1, padding: 10 }}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default AddProduct;
