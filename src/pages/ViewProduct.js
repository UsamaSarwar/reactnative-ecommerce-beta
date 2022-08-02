import {
  Image,
  FlatList,
  StyleSheet,
  Text,
  View,
  Alert,
  BackHandler,
} from "react-native";
import LargeBlackButton from "../components/LargeBlackButton";
import Header from "../components/Header";
import CustomDropDown from "../components/CustomDropDown";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import { grey } from "../utils/Constants";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../utils/Api";
import Counter from "../components/Counter";
import Constants from "expo-constants";
import EmptyImage from "../components/icons/EmptyImage";

const ViewProduct = ({ navigation }) => {
  const id = [{ id: 0 }, { id: 1 }, { id: 2 }];
  const admin = useSelector((state) => state.user.admin);

  const itemID = useSelector((state) => state.cart.selectedID);
  const quantity = useSelector((state) => {
    const i = state.cart.ids.indexOf(itemID);
    if (i != -1) {
      return state.cart.items[i].quantity;
    } else {
      return 0;
    }
  });

  const [data, setData] = useState();
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  const loadData = async () => {
    const result = await api("product/view", "post", { _id: itemID });
    if (result) {
      setData(result.body.product);
    } else {
      Alert.alert("Error", "Couldnt get product");
      navigation.navigate("HomePage");
    }
  };

  useEffect(() => {
    loadData();
  }, [itemID]);

  const renderItems = ({ item }) => {
    switch (item.id) {
      case 0:
        let imagePath;
        if (data && data.image) {
          imagePath = Constants.manifest.extra.baseUrl + data.image;
        }

        return (
          <TouchableOpacity>
            <View style={styles.imageContainer}>
              {data && data.image ? (
                <Image style={styles.image} source={{ uri: imagePath }}></Image>
              ) : (
                <EmptyImage height={300} width={300} />
              )}
            </View>
          </TouchableOpacity>
        );
      case 1:
        const sizeList = data
          ? data.size.map((value) => {
              return { label: value.toUpperCase(), value };
            })
          : [{ label: "loading", value: "loading" }];
        const colorList = data
          ? data.color.map((value) => {
              return { label: value.toUpperCase(), value };
            })
          : [{ label: "loading", value: "loading" }];

        return (
          <View style={styles.center}>
            <View style={styles.selectionContainer}>
              <CustomDropDown
                itemList={sizeList}
                placeholderText="Size"
                setResult={setSize}
              ></CustomDropDown>
              <CustomDropDown
                itemList={colorList}
                placeholderText="Color"
                setResult={setColor}
              ></CustomDropDown>
            </View>

            <View style={styles.productHeader}>
              <Text style={styles.productTitle}>
                {data ? data.name : "Loading..."}
              </Text>
              <Text style={styles.productSub}>
                {" "}
                {data ? data.brand : "Loading..."}
              </Text>
            </View>
            <Text style={styles.productPrice}>
              $ {data ? data.price : "..."}
            </Text>
          </View>
        );
      case 2:
        return (
          <Text style={styles.productDescription}>
            {" "}
            {data ? data.description : "..."}
          </Text>
        );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header content={data ? data.name : "Loading..."} flex={0} back={true} />
      <View flex={1}>
        <FlatList data={id} renderItem={renderItems}></FlatList>
      </View>
      <View style={[styles.floatingButton]}>
        {quantity === 0 && !admin && (
          <LargeBlackButton
            btnText="ADD TO CART"
            cartItem={
              data
                ? {
                    _id: itemID,
                    name: data.name,
                    stock: data.stock,
                    price: data.price,
                    image: data.image,
                    color: color,
                    size: size,
                  }
                : {}
            }
          ></LargeBlackButton>
        )}
        {quantity > 0 && !admin && (
          <Counter _id={itemID} count={quantity} big={true} />
        )}

        {admin && (
          <View style={styles.admin}>
            <LargeBlackButton btnText={"Edit"} flex={1}></LargeBlackButton>
            <LargeBlackButton btnText={"Delete"} flex={1}></LargeBlackButton>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "stretch",
  },
  image: {
    width: 300,
    height: null,
    aspectRatio: 1,
    // backgroundColor: "red",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "pink",
  },
  center: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  selectionContainer: {
    width: "100%",
    flexDirection: "row",
    marginVertical: 15,
  },
  productHeader: {
    width: "50%",
    marginVertical: 5,
    // backgroundColor: "orange",
    paddingLeft: 15,
  },
  productTitle: {
    fontSize: 25,
    fontWeight: "bold",
  },
  productSub: {
    color: grey,
  },
  productPrice: {
    paddingRight: 15,
    width: "50%",
    // backgroundColor: "purple",
    textAlign: "right",
    textAlignVertical: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
  productDescription: {
    flex: 1,
    fontSize: 16,
    marginLeft: 15,
    marginRight: 40,
    textAlign: "justify",
    marginTop: 15,
    paddingBottom: 100,

    // backgroundColor: "honeydew",
  },
  floatingButton: {
    position: "absolute",
    bottom: 0,
    paddingBottom: 10,
    height: "10%",
    width: "100%",
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  admin: {
    flexDirection: "row",
  },
});

export default ViewProduct;
