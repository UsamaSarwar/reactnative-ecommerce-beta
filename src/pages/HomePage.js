import { StyleSheet, TouchableOpacity, View } from "react-native";
import SearchBar from "../components/SearchBar";
import { useEffect, useState } from "react";
import { FlatList, ScrollView, Text } from "react-native";
import api from "../utils/Api";
import SmallProduct from "../components/SmallProduct";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/user";
import { resetApi } from "../features/api";

const HomePage = ({ navigation, admin }) => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);

  const [productList, setProductList] = useState(null);
  const [ad, setAd] = useState(true);

  const data = useSelector((state) => state.apiData.res);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(reset());
  //   dispatch(resetApi());
  //   dispatch(init(2));
  // }, []);

  const loadData = async () => {
    const result = await api("product/view/list", "post", {});
    // console.log("*********");
    // console.log(result.body.products);
    setProductList(result.body.products);
  };

  useEffect(() => {
    if (data.token) {
      dispatch(login(data));
      dispatch(resetApi());
    }

    console.log(data);
    loadData();
  }, []);

  return (
    <View style={styles.container}>
      <SearchBar
        clicked={clicked}
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        setClicked={setClicked}
      ></SearchBar>
      <View>
        <FlatList
          contentContainerStyle={styles.contentContainer}
          numColumns={2}
          data={productList}
          keyExtractor={(item) => item._id}
          renderItem={({ item, index, separators }) => {
            return (
              <TouchableOpacity
                style={{ flex: 1 }}
                activeOpacity={1}
                onPress={() =>
                  navigation.navigate("ViewProduct", {
                    product: item,
                    admin: ad,
                    // token: token,
                  })
                }
              >
                <SmallProduct product={item} admin={ad} />
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View>
        {/* <FooterHomePage>

        </FooterHomePage> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: 80,
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
