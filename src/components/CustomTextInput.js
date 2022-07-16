import { FontAwesome5 } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import {
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

const CustomTextInput = (props) => {
  const [text, setText] = useState("");
  const [error, setError] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isSecureEntry, setIsSecureEntry] = useState(false);
  const [errorText, setErrorText] = useState("*This field is required");

  useEffect(() => {
    if (props.type.toLowerCase() === "password") {
      console.log("GREAT");
      setIsPassword(true);
      setIsSecureEntry(true);
    }
  }, []);

  const onBlur = () => {
    if (props.required) {
      let result = validateText(text, props.type);
      setError(result[0]);
      setErrorText(result[1]);
    }

    console.log("Focus Lost");
  };

  const onChange = (e) => {
    setText(e.nativeEvent.text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.eyeContainer}>
        <TextInput
          style={[
            styles.input,
            error && styles.inputError,
            !isPassword && { marginRight: marginHorizontal },
          ]}
          value={text}
          placeholderTextColor="#afafaf"
          placeholder={props.type}
          onBlur={onBlur}
          onChange={onChange}
          secureTextEntry={isSecureEntry}
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
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  input: {
    flex: 1,
    color: black,
    marginTop: marginVertical,
    marginLeft: marginHorizontal,
    paddingBottom: 5,
    fontSize: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: grey,
  },
  inputError: {
    borderBottomColor: "red",
  },
  error: {
    alignSelf: "flex-start",
    color: "red",
    marginVertical: 5,
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
