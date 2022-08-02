import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  borderBlue,
  buttonFontSize,
  marginHorizontal,
  textBlue,
} from "../utils/Constants";
import { useNavigation } from "@react-navigation/native";

const FacebookButton = (props) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("HomePage");
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>LOGIN FROM FACEBOOK</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    alignItems: "center",
    padding: 10,
    marginHorizontal: marginHorizontal,
    alignSelf: "stretch",
    borderColor: borderBlue,
    borderRadius: 1,
    borderWidth: 1.5,
    backgroundColor: "transparent",
  },
  text: {
    fontWeight: "500",
    fontSize: buttonFontSize,
    color: textBlue,
  },
});

export default FacebookButton;
