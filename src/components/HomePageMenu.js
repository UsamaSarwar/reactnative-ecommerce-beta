import {
  Pressable,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Search from "../../assets/public/svgs/Search";
import Bag from "../../assets/public/svgs/Bag";
import Home from "../../assets/public/svgs/Home";
import Profile from "../../assets/public/svgs/Profile";
import { useNavigation, CommonActions } from "@react-navigation/native";
import Cart from "../../assets/public/svgs/Cart";
import Logout from "./icons/Logout";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/user";
import { clearCart } from "../features/cart";

const HomePageMenu = () => {
  const navigation = useNavigation();
  const admin = useSelector((state) => state.user.admin);
  const dispatch = useDispatch();

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
        {!admin && (
          <TouchableWithoutFeedback
            style={styles.component}
            onPress={() => {
              navigation.navigate("Cart");
            }}
          >
            <Cart height={22} width={22} />
          </TouchableWithoutFeedback>
        )}
        <Pressable
          onPress={() => {
            dispatch(logout());
            dispatch(clearCart());
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [
                  {
                    name: "Login",
                  },
                ],
              })
            );
          }}
        >
          <Logout />
        </Pressable>
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
    width: "100%",
    backgroundColor: "#F5F8FA",
    // backgroundColor: "red",
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    elevation: 2,
  },
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    // backgroundColor: "blue",
    position: "absolute",
    bottom: 0,
  },
});

export default HomePageMenu;
