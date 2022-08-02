import {
  StyleSheet,
  TouchableOpacity,
  View,
  FlatList,
  Text,
  BackHandler,
  ToastAndroid,
} from "react-native";
import SearchBar from "../components/SearchBar";
import { useEffect, useState } from "react";
import api from "../utils/Api";
import SmallProduct from "../components/SmallProduct";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/user";
import { resetApi } from "../features/api";
import HomePageMenu from "../components/HomePageMenu";
import { SafeAreaView } from "react-native-safe-area-context";
import { selectItem } from "../features/cart";
import { init } from "../features/validation";
import { useNavigationState } from "@react-navigation/native";

const HomePage = ({ navigation }) => {
  const filterData = [
    { label: "Chair" },
    { label: "Cupboard" },
    { label: "Table" },
    { label: "Accessories" },
    { label: "Furniture" },
    { label: "Enlighte" },
  ];

  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [backPressCount, setBackPressCount] = useState(0);
  const navIndex = useNavigationState((s) => s.index);

  const [productList, setProductList] = useState(null);
  const admin = useSelector((state) => state.user.admin);

  const data = useSelector((state) => state.apiData.res);
  const dispatch = useDispatch();

  const loadData = async () => {
    const result = await api("product/view/list", "post", {});
    if (result && result.body) {
      setProductList(result.body.products);
    }
  };

  useEffect(() => {
    if (data.token) {
      dispatch(login(data));
      dispatch(resetApi());
    }
    loadData();
  }, []);

  const handleBackPress = () => {
    if (navIndex === 0) {
      if (backPressCount === 0) {
        setBackPressCount((prevCount) => prevCount + 1);
        setTimeout(() => setBackPressCount(0), 2000);
        ToastAndroid.show("Press one more time to exit", ToastAndroid.SHORT);
      } else if (backPressCount === 1) {
        BackHandler.exitApp();
      }
    } else {
      dispatch(init(0));
      navigation.goBack();
    }

    return true;
  };

  useEffect(() => {
    const backListner = BackHandler.addEventListener(
      "hardwareBackPress",
      handleBackPress
    );
    return () =>
      BackHandler.removeEventListener("hardwareBackPress", handleBackPress);
  }, [handleBackPress]);

  const renderItem = ({ item, index, separators }) => {
    return (
      <TouchableOpacity
        style={{ flex: 1 }}
        activeOpacity={1}
        onPress={() => {
          dispatch(selectItem(item._id));
          navigation.navigate("ViewProduct");
        }}
      >
        <SmallProduct product={item} admin={admin} />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        clicked={clicked}
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        setClicked={setClicked}
      ></SearchBar>
      <View style={styles.horizontalFl}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={filterData}
          renderItem={({ item, index, separators }) => {
            return <Text style={styles.filterComponent}>{item.label}</Text>;
          }}
        />
      </View>
      <View>
        <FlatList
          contentContainerStyle={styles.contentContainer}
          numColumns={2}
          data={productList}
          keyExtractor={(item) => item._id}
          renderItem={renderItem}
        />
      </View>
      <HomePageMenu />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  horizontalFl: {
    paddingVertical: 5,
    borderTopWidth: 1,
    borderColor: "black",
    borderBottomWidth: 1,
    marginHorizontal: 10,
  },
  filterComponent: {
    marginHorizontal: 10,
  },
  contentContainer: {
    paddingBottom: 180,
    marginTop: 10,
  },

  head: {
    marginTop: 5,
  },

  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "white",
    // justifyContent: "center",
    // alignItems: "stretch",
  },
});

export default HomePage;
