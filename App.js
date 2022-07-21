// Libraries
import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
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
import AddProduct from "./src/pages/AddProduct";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createStackNavigator();

const App = () => {
  const [data, setData] = useState({});
  const [token, setToken] = useState();
  const [admin, setAdmin] = useState();

  useEffect(() => {
    if (data.body) {
      if (data.body.token) {
        setToken(data.body.token);
      }
      if (data.body.type) {
        setAdmin(data.body.type === "admin");
      }
    }
  }, [data]);
  return (
    <SafeAreaProvider>
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
          <Stack.Screen name="HomePage">
            {(props) => <HomePage {...props} admin={admin} />}
          </Stack.Screen>

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
          <Stack.Screen
            name="AddProduct"
            initialParams={{ token: token }}
            component={AddProduct}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
