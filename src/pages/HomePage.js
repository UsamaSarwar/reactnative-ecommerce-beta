import {
  StyleSheet,
  TouchableOpacity,
  View,
  FlatList,
  Text,
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
  },

  head: {
    marginTop: 5,
  },

  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "#ffffff",
    // justifyContent: "center",
    // alignItems: "stretch",
  },
});

export default HomePage;
