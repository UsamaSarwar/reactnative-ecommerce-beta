//Dummy page to test components

import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CartList from "../components/CartList";
import CustomDropDown from "../components/CustomDropDown";
import TotalAmmountLabel from "../components/TotalAmmountLabel";
import { marginHorizontal, marginVertical, sizeList } from "../utils/Constants";

const Test = () => {
  return (
    <SafeAreaView style={styles.main}>
      {/* <TotalAmmountLabel></TotalAmmountLabel> */}
      {/* <CartList></CartList> */}
      <View style={styles.second}>
        <CustomDropDown
          itemList={sizeList}
          placeholderText="HE HE HA HA"
          type=""
        ></CustomDropDown>
        <CustomDropDown
          itemList={sizeList}
          placeholderText="HE HE HA HA"
          type=""
        ></CustomDropDown>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  second: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    // backgroundColor: "green",
  },
});

export default Test;
