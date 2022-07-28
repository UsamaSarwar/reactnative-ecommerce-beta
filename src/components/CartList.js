import { useEffect } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import Counter from "./Counter";
import EmptyCart from "./icons/EmptyCart";

const placeholderImg = require("../../assets/add-image.png");

const Item = ({
  title = "",
  price = 0,
  quantity = -1,
  image = "",
  _id = 0,
}) => {
  return (
    <View style={styles.item}>
      <Image source={placeholderImg} style={styles.image}></Image>
      <View style={styles.itemCenter}>
        <Text style={styles.headerText}>{title}</Text>
        <Counter count={quantity} _id={_id}></Counter>
      </View>
      <View style={styles.itemEnd}>
        <Text style={styles.price}>${price}</Text>
      </View>
    </View>
  );
};

const renderItem = ({ item }) => {
  return (
    <Item
      title={item ? item.name : ""}
      price={item ? item.price : ""}
      quantity={item ? item.quantity : ""}
      image={item ? item.image : ""}
      _id={item ? item._id : ""}
    ></Item>
  );
};

const CartList = () => {
  const data = useSelector((state) => state.cart.items);

  useEffect(() => {}, []);

  // const data = dummyData;
  return data.length ? (
    <FlatList
      data={data}
      renderItem={renderItem}
      style={styles.list}
    ></FlatList>
  ) : (
    <EmptyCart />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    alignSelf: "stretch",
    marginHorizontal: 20,
    // backgroundColor: "green",
  },
  headerText: { fontSize: 22, marginLeft: 5 },
  image: {
    // width: "30%",
    // height: null,
    aspectRatio: 1,
    flex: 1,
  },
  item: {
    flexDirection: "row",
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    overflow: "hidden",
    borderColor: "silver",
    // backgroundColor: "red",
  },
  itemCenter: {
    alignItems: "flex-start",
    justifyContent: "space-around",
    marginLeft: 5,
    // backgroundColor: "green",
  },
  itemEnd: {
    // alignSelf: "flex-end",
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    // backgroundColor: "blue",
  },
  price: {
    fontSize: 20,
    paddingVertical: 20,
    paddingRight: 20,
    // fontWeight: "bold",
  },
});

export default CartList;
