import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

const UploadImage = ({ flex }) => {
  const onPress = () => {
    console.log("HI");
  };

  const img = require("../../assets/add-image.png");

  return (
    <View
      style={{
        flex: flex,
        alignItems: "center",
        alignSelf: "stretch",
      }}
    >
      <TouchableOpacity
        style={styles.container}
        onPress={onPress}
        activeOpacity={0.5}
      >
        <Image style={styles.image} source={img}></Image>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: "lightgrey",
  },
  image: {
    width: "50%",
    height: null,
    aspectRatio: 1,
  },
});

export default UploadImage;
