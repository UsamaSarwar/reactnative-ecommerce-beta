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
import AddAddress from "./src/pages/AddAddress";
import AddNewCard from "./src/pages/AddNewCard";
import AddProduct from "./src/pages/AddProduct";
import Checkout from "./src/pages/Checkout";
import ChangePassword from "./src/pages/ChangePassword";
import ContinueShopping from "./src/pages/ContinueShopping";
import DeleteAccount from "./src/pages/DeleteAccount";
import ForgotPassword from "./src/pages/ForgotPassword";
import HomePage from "./src/pages/HomePage";
import Login from "./src/pages/Login";
import PaymentMethods from "./src/pages/PaymentMethods";
import ShippingAddress from "./src/pages/ShippingAddress";
import Signup from "./src/pages/Signup";
import UserPanel from "./src/pages/UserPanel";
import ViewProduct from "./src/pages/ViewProduct";

//reducers
import userReducer from "./src/features/user";
import apiReducer from "./src/features/api";
import validationReducer from "./src/features/validation";
// import Test from "./src/pages/Test";
import cartReducer from "./src/features/cart";
import Test from "./src/pages/Test";
import Cart from "./src/pages/Cart";

const Stack = createStackNavigator();

const store = configureStore({
  reducer: {
    user: userReducer,
    apiData: apiReducer,
    validation: validationReducer,
    cart: cartReducer,
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="HomePage"
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
            {/* <Stack.Screen name="Test" component={Test} /> */}
            <Stack.Screen name="Checkout" component={Checkout} />
            <Stack.Screen name="PaymentMethods" component={PaymentMethods} />
            <Stack.Screen name="AddAddress" component={AddAddress} />
            <Stack.Screen name="AddNewCard" component={AddNewCard} />
            <Stack.Screen
              name="ContinueShopping"
              component={ContinueShopping}
            />
            <Stack.Screen name="ShippingAddress" component={ShippingAddress} />
            <Stack.Screen name="Cart" component={Cart}></Stack.Screen>
            <Stack.Screen name="Test" component={Test} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
