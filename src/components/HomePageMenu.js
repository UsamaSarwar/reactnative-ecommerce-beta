import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomePageMeun = () => {
  retrun(
    <View style={styles.container}>
      <TouchableOpacity />

      <TouchableOpacity />
      <TouchableOpacity />
      <TouchableOpacity />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "90%",
    backgroundColor: "#F5F8FA",
    height: 25,
  },
  home: {
    flex: 1,
  },
  search: {
    flex: 1,
  },
  lock: {
    flex: 1,
  },
  profile: {
    flex: 1,
  },
});

export default HomePageMeun;
