import { StyleSheet, Text, TouchableOpacity, Alert, View } from "react-native";
import {
  black,
  buttonFontSize,
  marginHorizontal,
  marginVertical,
} from "../utils/Constants";
import { useNavigation, CommonActions } from "@react-navigation/native";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import api from "../utils/Api";
import { successMessages, endpoints } from "../utils/Constants";
import { setRes } from "../features/api";
import { toggleError } from "../features/validation";

const LargeBlackButton = ({ changeTo, btnText }) => {
  const [disable, setDisable] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.apiData.req);
  const isValid = useSelector((state) => {
    return state.validation.target === state.validation.valid;
  });

  const onPress = async () => {
    if (isValid) {
      setDisable(true);
      try {
        console.log(data);
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
        if (changeTo == "goBack") {
          navigation.goBack();
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
        } else {
          navigation.navigate(changeTo);
        }
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
    <View style={styles.container}>
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
    // justifyContent:""
  },
  btn: {
    // flex: 1,
    height: 50,
    justifyContent: "center",
    marginTop: marginVertical * 2,
    alignItems: "center",
    marginHorizontal: marginHorizontal,
    backgroundColor: black,
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
