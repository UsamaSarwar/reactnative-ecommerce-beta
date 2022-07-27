// Libraries
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

// Pages
import Login from "./src/pages/Login";
import ForgotPassword from "./src/pages/ForgotPassword";
import Signup from "./src/pages/Signup";
import HomePage from "./src/pages/HomePage";
import DeleteAccount from "./src/pages/DeleteAccount";
import ChangePassword from "./src/pages/ChangePassword";
import AddProduct from "./src/pages/AddProduct";
import UserPanel from "./src/pages/UserPanel";
import ViewProduct from "./src/pages/ViewProduct";

//reducers
import userReducer from "./src/features/user";
import apiReducer from "./src/features/api";
import validationReducer from "./src/features/validation";
import Test from "./src/pages/Test";

const Stack = createStackNavigator();

const store = configureStore({
  reducer: {
    user: userReducer,
    apiData: apiReducer,
    validation: validationReducer,
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Test"
            screenOptions={{
              headerShown: false,
              gestureEnabled: true,
              gestureDirection: "horizontal",
              ...TransitionPresets.SlideFromRightIOS,
            }}
          >
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="HomePage" component={HomePage} />
            <Stack.Screen name="DeleteAccount" component={DeleteAccount} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} />
            <Stack.Screen name="AddProduct" component={AddProduct} />
            <Stack.Screen name="UserPanel" component={UserPanel} />
            <Stack.Screen name="ViewProduct" component={ViewProduct} />
            <Stack.Screen name="Test" component={Test} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
