import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  View,
  Keyboard,
} from "react-native";
import {
  black,
  buttonFontSize,
  marginHorizontal,
  marginVertical,
} from "../utils/Constants";
import { useNavigation, CommonActions } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import api from "../utils/Api";
import { successMessages, endpoints } from "../utils/Constants";
import { setRes } from "../features/api";
import { init, toggleError } from "../features/validation";
import { addToCart } from "../features/cart";

const LargeBlackButton = ({ changeTo, btnText, flex, cartItem, fields }) => {
  const [disable, setDisable] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.apiData.req);
  const isValid = useSelector((state) => {
    console.log("Validation Target: " + state.validation.target);
    return state.validation.target === state.validation.valid;
  });

  useEffect(() => {
    if (fields) {
      dispatch(init(fields));
    } else {
      dispatch(init(0));
    }
  }, []);

  const onPress = async () => {
    // Keyboard.dismiss;
    if (isValid) {
      setDisable(true);
      try {
        console.log(data);
        if (endpoints[btnText]) {
          let resp = { data: {} };
          resp.data = await api(endpoints[btnText], "post", data);
          if (resp && resp.data.body) {
            // console.log(resp);
            dispatch(setRes(resp.data.body));
            console.log("I IS WORK");
            let success = successMessages[btnText];
            // Alert.alert(success.title, success.message);
          } else {
            throw resp.data.error;
          }
        }
        if (changeTo == "goBack") {
          navigation.goBack();
        } else if (changeTo == "HomePage") {
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [
                {
                  name: "HomePage",
                },
              ],
            })
          );
        } else if (changeTo == "deleteAccount") {
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
        } else if (btnText === "ADD TO CART") {
          dispatch(addToCart(cartItem));
        } else {
          navigation.navigate(changeTo);
        }
        dispatch(init(0));
      } catch (err) {
        dispatch(toggleError());
        console.log(err);
        if (err.title) {
          Alert.alert(err.title, err.message);
        } else {
          Alert.alert(
            "Error occured",
            "Unkown Error occured: \n" + err.message
          );
        }
      }
      setDisable(false);
    } else {
      dispatch(toggleError());
    }
  };

  return (
    <View style={[styles.container, { flex: flex }]}>
      <TouchableOpacity disabled={disable} style={styles.btn} onPress={onPress}>
        <Text style={styles.text}>{btnText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    alignSelf: "stretch",
    // backgroundColor: "orange",
    // justifyContent:""
  },
  btn: {
    // flex: 1,
    height: 50,
    justifyContent: "center",
    marginTop: marginVertical,
    alignItems: "center",
    marginHorizontal: marginHorizontal,
    backgroundColor: "#000DAE",
    borderWidth: 1.5,
    borderRadius: 3,
    alignSelf: "stretch",
  },
  text: {
    fontWeight: "500",
    fontSize: buttonFontSize,
    color: "#ffffff",
  },
});

export default LargeBlackButton;
