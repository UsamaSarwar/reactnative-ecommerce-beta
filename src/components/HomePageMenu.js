import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Search from "../../assets/public/svgs/Search";
import Bag from "../../assets/public/svgs/Bag";
import Home from "../../assets/public/svgs/Home";
import Profile from "../../assets/public/svgs/Profile";
import { useNavigation } from "@react-navigation/native";
import Cart from "../../assets/public/svgs/Cart";

const HomePageMenu = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <TouchableWithoutFeedback
          style={styles.component}
          onPress={() => {
            navigation.navigate("HomePage");
          }}
        >
          <Home />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          style={styles.component}
          onPress={() => {
            navigation.navigate("UserPanel");
          }}
        >
          <Profile />
        </TouchableWithoutFeedback>
        {/* <TouchableOpacity style={styles.component}>
          <Search />
        </TouchableOpacity> */}
        <TouchableWithoutFeedback
          style={styles.component}
          onPress={() => {
            navigation.navigate("Cart");
          }}
        >
          <Cart height={22} width={22} />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  component: {
    flex: 1,
    justifyContent: "center",
  },
  card: {
    justifyContent: "space-evenly",
    width: "90%",
    backgroundColor: "#F5F8FA",
    // backgroundColor: "red",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    height: 50,
  },
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    // backgroundColor: "blue",
    position: "absolute",
    bottom: 30,
  },
});

export default HomePageMenu;
