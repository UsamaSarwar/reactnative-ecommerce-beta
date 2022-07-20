import { StyleSheet, Text, TouchableOpacity, Alert } from "react-native";
import {
  black,
  buttonFontSize,
  marginHorizontal,
  marginVertical,
} from "../utils/Constants";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import api from "../utils/Api";

const LargeBlackButton = ({
  isValid,
  changeTo,
  btnText,
  setError,
  req,
  setData,
}) => {
  const [disable, setDisable] = useState(false);
  const navigation = useNavigation();

  const onPress = async () => {
    if (isValid) {
      if (changeTo == "goBack") {
        if (btnText == "Sign Up") {
          setDisable(true);
          try {
            console.log(req);
            let resp = await api("user/signup", "post", {
              email: req.email,
              name: req.name,
              password: req.password,
              phone: req.phone,
              dob: req.dob,
              address: req.address ? req.address : "",
            });
            if (resp && resp.body) {
              console.log("API working");
              navigation.goBack();
            } else {
              Alert.alert("Account already exists", "Please login instead.");
            }
          } catch (err) {
            Alert.alert(
              "Failed to create an account",
              "Unkown Error occured: \n" + err.message
            );
          }
          setDisable(false);
        } else {
          navigation.goBack();
        }
      } else {
        if (btnText.toLowerCase === "login") {
          setDisable(true);
          try {
            let resp = await api("user/signin", "post", {
              email: req.email,
              password: req.password,
            });
            if (resp && resp.body) {
              console.log("API working");
              setData(resp);
              navigation.navigate(changeTo);
            } else {
              Alert.alert("Login Failed", "Invalid Credentials");
            }
          } catch (err) {
            Alert.alert(
              "Login Failed",
              "Unkown Error occured: \n" + err.message
            );
          }
          setDisable(false);
        }
      }
    } else {
      setError(true);
    }
  };

  return (
    <TouchableOpacity disabled={disable} style={styles.btn} onPress={onPress}>
      <Text style={styles.text}>{btnText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    height: 50,
    justifyContent: "center",
    marginTop: marginVertical,
    alignItems: "center",
    marginHorizontal: marginHorizontal,
    backgroundColor: black,
    borderWidth: 1.5,
    borderRadius: 3,
  },
  text: {
    fontWeight: "500",
    fontSize: buttonFontSize,
    color: "#ffffff",
  },
});

export default LargeBlackButton;
