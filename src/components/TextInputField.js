import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

const TextInputField = (props) => {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.nativeEvent.text);
  };

  return (
    <TextInput
      style={styles.input}
      value={text}
      placeholderTextColor="#8f8f8f"
      placeholder={props.placeholderText}
      onChange={onChange}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    alignSelf: "stretch",
    marginHorizontal: 30,
    paddingBottom: 10,
    fontSize: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#8f8f8f",
  },
});

export default TextInputField;
