import { FontAwesome5 } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  black,
  grey,
  marginHorizontal,
  marginVertical,
} from "../utils/Constants";
import validateText from "../utils/Validation";
import { setReq } from "../features/api";
import { setValid, setInvalid, toggleError } from "../features/validation";
import { useDispatch, useSelector } from "react-redux";

const CustomTextInput = ({ required, type, placeholderText }) => {
  const [text, setText] = useState("");
  const [error, setError] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isSecureEntry, setIsSecureEntry] = useState(false);
  const [errorText, setErrorText] = useState("*This field is required");

  const anim = useRef(new Animated.Value(0)).current;
  const dispatch = useDispatch();
  const globalError = useSelector((state) => state.validation.error);

  // Label animation
  useEffect(() => {
    Animated.timing(anim, {
      toValue: isFocused ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isFocused]);

  //Password field
  useEffect(() => {
    if (
      type &&
      type === "password" &&
      type === "newPassword" &&
      type === "prevPassword"
    ) {
      setIsPassword(true);
      setIsSecureEntry(true);
    }
    setText("");
  }, []);

  // Set Global error
  useEffect(() => {
    if (globalError) {
      let result = validateText(text, type);
      setError(result[0]);
      setErrorText(result[1]);
      dispatch(toggleError());
    }
  }, [globalError]);

  const onBlur = () => {
    if (text === "") {
      setIsFocused(false);
    }

    if (required) {
      let result = validateText(text, type);
      if (type) {
        if (!result[0]) {
          console.log("Set data for " + type);
          dispatch(setReq({ property: type, value: text }));
        }
      }
      result[0] ? dispatch(setInvalid()) : dispatch(setValid());
      setError(result[0]);
      setErrorText(result[1]);
    } else {
      dispatch(setReq({ property: type, value: text }));
    }
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onChange = (e) => {
    setText(e.nativeEvent.text);
  };

  return (
    <View style={[styles.container, { marginTop: isFocused ? 10 : 0 }]}>
      <Animated.Text
        style={[
          styles.placeholderText,
          {
            top: anim.interpolate({
              inputRange: [0, 1],
              outputRange: [25, 0],
            }),
            left: anim.interpolate({
              inputRange: [0, 1],
              outputRange: [4, 2],
            }),
            fontSize: anim.interpolate({
              inputRange: [0, 1],
              outputRange: [20, 14],
            }),
            color: anim.interpolate({
              inputRange: [0, 1],
              outputRange: [grey, "black"],
            }),
          },
        ]}
      >
        {placeholderText}
      </Animated.Text>
      <View style={styles.eyeContainer}>
        <TextInput
          style={[
            styles.input,
            error && styles.inputError,
            !isPassword && { marginRight: marginHorizontal },
          ]}
          value={text}
          placeholderTextColor="#afafaf"
          onBlur={onBlur}
          onChange={onChange}
          secureTextEntry={isSecureEntry}
          onFocus={onFocus}
        />
        {isPassword && (
          <View style={[styles.eye, error && styles.inputError]}>
            <TouchableOpacity
              onPress={() => {
                setIsSecureEntry(!isSecureEntry);
              }}
            >
              <FontAwesome5
                name={isSecureEntry ? "eye" : "eye-slash"}
                size={20}
                color="gray"
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
      {error && <Text style={styles.error}>{errorText}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 5,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    // backgroundColor: "blue",
  },
  input: {
    flex: 1,
    color: black,
    marginLeft: marginHorizontal,
    paddingBottom: 5,
    fontSize: 16,
    paddingLeft: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: grey,
    // backgroundColor: "red",
  },
  inputError: {
    borderBottomColor: "red",
  },
  placeholderText: {
    color: grey,
    marginLeft: marginHorizontal,
    alignSelf: "flex-start",
  },

  error: {
    alignSelf: "flex-start",
    color: "red",
    marginHorizontal: marginHorizontal,
  },
  eye: {
    paddingRight: 5,
    paddingVertical: 6,
    marginRight: marginHorizontal,
    alignSelf: "flex-end",
    borderBottomWidth: 0.5,
    borderBottomColor: grey,
  },
  eyeContainer: {
    flexDirection: "row",
    alignItems: "stretch",
  },
});

export default CustomTextInput;
