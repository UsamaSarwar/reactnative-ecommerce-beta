import { StyleSheet, Text, TouchableOpacity, Alert, View } from "react-native";
import {
  black,
  buttonFontSize,
  marginHorizontal,
  marginVertical,
} from "../utils/Constants";
import { useNavigation, CommonActions } from "@react-navigation/native";
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
            console.log(resp);
            if (resp && resp.body) {
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
      } else if (changeTo == "deleteAccount") {
        setDisable(true);

        try {
          // calling api
          console.log(req);
          let resp = await api("user/delete", "post", {
            token: req.token,
            password: req.password,
          });

          console.log(req);
          // if api work as expected
          if (resp && resp.body) {
            Alert.alert("Account Deleted", "Successfully account deleted");

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
            Alert.alert("Incorrect password", "Please enter correct password");
          }

          // mention of there are any errors
        } catch (err) {
          Alert.alert("Login Failed", "Unkown Error occured: \n" + err.message);
        }
        setDisable(false);
      } else if (btnText == "Confirm Change Password") {
        setDisable(true);
        try {
          let resp = await api("user/update/password", "post", {
            prevPassword: req.oldPassword,
            newPassword: req.newPassword,
            token: req.token,
          });

          if (resp && resp.body) {
            Alert.alert("Password updated", "Successfully changed password");
            navigation.navigate(changeTo);
          } else {
            Alert.alert("Login Failed", "Invalid Credentials");
          }
        } catch (err) {
          Alert.alert("Login Failed", "Unkown Error occured: \n" + err.message);
        }
        setDisable(false);
      } else {
        if (btnText.toLowerCase() === "login") {
          setDisable(true);
          try {
            let resp = await api("user/signin", "post", {
              email: req.email,
              password: req.password,
            });
            if (resp && resp.body) {
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
        } else {
          navigation.navigate(changeTo);
        }
      }
    } else {
      setError(true);
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
    flex: 1,
    alignSelf: "stretch",
    // justifyContent:""
  },
  btn: {
    // flex: 1,
    height: 50,
    justifyContent: "center",
    marginTop: marginVertical,
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
