import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
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
  const [errorText, setErrorText] = useState("*This field is required");

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
      <TextInput
        style={[styles.input, error && styles.inputError]}
        value={text}
        placeholderTextColor="#afafaf"
        placeholder={props.type}
        onBlur={onBlur}
        onChange={onChange}
      />
      {error && <Text style={styles.error}>{errorText}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
  },
  input: {
    color: black,
    marginTop: marginVertical,
    marginHorizontal: marginHorizontal,
    paddingBottom: 5,
    fontSize: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: grey,
  },
  inputError: {
    borderBottomColor: "red",
  },
  error: {
    color: "red",
    marginVertical: 5,
    marginHorizontal: marginHorizontal,
  },
});

export default CustomTextInput;
