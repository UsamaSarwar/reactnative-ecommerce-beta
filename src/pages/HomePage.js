import { StyleSheet, View } from "react-native";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";

const categoryItem = ({ item }) => (
  <View>
    <Text>{item}</Text>
  </View>
);

const HomePage = ({ admin }) => {
  const categoryData = [
    {
      category: "Category 1",
    },
    {
      category: "Category 2",
    },
    {
      category: "Category 3",
    },
    {
      category: "Category 4",
    },
    {
      category: "Category 5",
    },
    {
      category: "Category 6",
    },
  ];

  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [fakeData, setFakeData] = useState();

  return (
    <View style={styles.container}>
      <SearchBar
        clicked={clicked}
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        setClicked={setClicked}
      ></SearchBar>
      <View>
        <ScrollView></ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  head: {
    marginTop: 5,
  },

  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "#ffffff",
    // justifyContent: "center",
    // alignItems: "stretch",
  },
});

export default HomePage;
