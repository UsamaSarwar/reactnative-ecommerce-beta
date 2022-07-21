// Libraries
import "react-native-gesture-handler";
import { ScrollView, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

// Pages
import Login from "./src/pages/Login";
import ForgotPassword from "./src/pages/ForgotPassword";
import Signup from "./src/pages/Signup";
import HomePage from "./src/pages/HomePage";
import { useEffect, useState } from "react";
import DeleteAccount from "./src/pages/DeleteAccount";
import ChangePassword from "./src/pages/ChangePassword";

const Stack = createStackNavigator();

const App = () => {
  const [data, setData] = useState({});
  const [token, setToken] = useState();

  useEffect(() => {
    if (data.body) {
      if (data.body.token) {
        setToken(data.body.token);
      }
    }
  }, [data]);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
            gestureEnabled: true,
            gestureDirection: "horizontal",
            ...TransitionPresets.SlideFromRightIOS,
          }}
        >
          <Stack.Screen
            name="ForgotPassword"
            token={token}
            component={ForgotPassword}
          />
          <Stack.Screen name="Login">
            {(props) => <Login {...props} setData={setData} />}
          </Stack.Screen>
          <Stack.Screen name="Signup" component={Signup}></Stack.Screen>
          <Stack.Screen name="HomePage" token={token} component={HomePage} />
          <Stack.Screen
            name="DeleteAccount"
            initialParams={{ token: token }}
            component={DeleteAccount}
          />
          <Stack.Screen
            name="ChangePassword"
            initialParams={{ token: token }}
            component={ChangePassword}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
