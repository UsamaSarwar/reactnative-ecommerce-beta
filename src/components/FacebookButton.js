import { StyleSheet, Text, TouchableOpacity } from "react-native";

const FacebookButton = (props) => {
  const onPress = () => {};
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>LOGIN FROM FACEBOOK</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    padding: 10,
    marginHorizontal: 30,
    alignSelf: "stretch",
    borderColor: "#4098ff",
    borderRadius: 1,
    borderWidth: 1.5,
    backgroundColor: "transparent",
  },
  text: {
    fontWeight: "500",
    fontSize: 15,
    color: "#2153ff",
  },
});

export default FacebookButton;
