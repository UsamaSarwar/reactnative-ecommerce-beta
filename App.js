//Libraries
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

//reducers
import userReducer from "./src/features/user";
import apiReducer from "./src/features/api";
import validationReducer from "./src/features/validation";
// import Test from "./src/pages/Test";
import cartReducer from "./src/features/cart";
import Main from "./src/pages/Main";

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
      <Main></Main>
    </Provider>
  );
};

export default App;
