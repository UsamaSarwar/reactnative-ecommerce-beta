// Libraries
import "react-native-gesture-handler";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Pages
import Login from "./src/pages/Login";
import ForgotPassword from "./src/pages/ForgotPassword";
import Signup from "./src/pages/Signup";
import HomePage from "./src/pages/HomePage";

const Stack = createStackNavigator();

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="HomePage" component={HomePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // backgroundColor: "blue",
    // height: "100%",
    // width: "100%",
    // alignItems: "stretch",
    // justifyContent: "space-evenly",
  },
});
