import { StyleSheet, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import UploadImage from "../components/UploadImage";
import CustomTextInput from "../components/CustomTextInput";
import { useEffect, useState } from "react";
import LargeBlackButton from "../components/LargeBlackButton";
import { marginHorizontal, marginVertical, sizeList } from "../utils/Constants";
import CustomDropDown from "../components/CustomDropDown";

const AddProduct = () => {
  const [isValid, setIsValid] = useState(false);
  const [reqData, setReqData] = useState({});
  const [isNameValid, setIsNameValid] = useState(false);
  const [isCategoryValid, setIsCategoryValid] = useState(false);
  const [isPriceValid, setIsPriceValid] = useState(false);
  const [isDiscountValid, setIsDiscountValid] = useState(false);
  const [isStockValid, setIsStockValid] = useState(false);

  useEffect(() => {
    if (
      isNameValid &&
      isCategoryValid &&
      isPriceValid &&
      isDiscountValid &&
      isStockValid
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [isNameValid, isDiscountValid]);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <UploadImage flex={1}></UploadImage>
        <CustomTextInput
          placeholderText="Name"
          type="name"
          setIsValid={setIsNameValid}
          required={true}
          setReqData={setReqData}
          reqData={reqData}
        ></CustomTextInput>
        <CustomTextInput
          placeholderText="Category"
          type="category"
          setReqData={setReqData}
          reqData={reqData}
        ></CustomTextInput>
        <CustomTextInput
          placeholderText="Description"
          type="description"
          setReqData={setReqData}
          reqData={reqData}
        ></CustomTextInput>
        <CustomTextInput
          placeholderText="Price"
          type="price"
          setReqData={setReqData}
          reqData={reqData}
        ></CustomTextInput>
        <CustomTextInput
          placeholderText="Discount"
          type="discount"
          required={true}
          setIsValid={setIsDiscountValid}
          setReqData={setReqData}
          reqData={reqData}
        ></CustomTextInput>
        <CustomTextInput
          placeholderText="Stock"
          type="stock"
          setReqData={setReqData}
          reqData={reqData}
        ></CustomTextInput>
        <CustomTextInput
          placeholderText="Brand"
          type="brand"
          setReqData={setReqData}
          reqData={reqData}
        ></CustomTextInput>
        <CustomDropDown
          itemList={sizeList}
          placeholderText="Select a size"
          type="size"
          setReqData={setReqData}
          reqData={reqData}
        ></CustomDropDown>
        <LargeBlackButton
          isValid={true}
          btnText="Add Product"
          req={reqData}
          changeTo={"goBack"}
        ></LargeBlackButton>
        <View style={{ flex: 1, padding: 10 }}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default AddProduct;
