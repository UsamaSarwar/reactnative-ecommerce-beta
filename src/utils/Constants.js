// Static common values for layouts
export const marginHorizontal = 40;
export const buttonFontSize = 18;
export const marginVertical = 20;
export const smallFontSize = 16;
export const counterButtonSize = 45;

//color
export const peach = "#F9C678";
export const red = "#FF2D55";
export const black = "#242A37";
export const grey = "#afafaf";
export const textBlue = "#2153ff";
export const borderBlue = "#4098ff";

//dropdown data
export const sizeList = [
  { label: "No size", value: "" },
  { label: "XXL", value: "xxl" },
  { label: "XL", value: "xl" },
  { label: "L", value: "l" },
  { label: "S", value: "s" },
  { label: "XS", value: "xs" },
];

// Alert success Messages for button
export const successMessages = {
  "Sign Up": {
    title: "Account Created",
    message: "Please login",
  },
  "Add Product": {
    title: "Product Added",
    message: "Succesfully added a new product",
  },
  "Delete Account": {
    title: "Account Deleted",
    message: "Successfully account deleted",
  },
  "Confirm Change Password": {
    title: "Password updated",
    message: "Successfully changed password",
  },
};

// // Alert failure Messages for button
// export const errorMessages = {
//   "Sign Up": {
//     title: "Account already exists",
//     message: "Please login instead",
//   },
//   "Add Product": {
//     title: "Failed to add Product",
//     message: "Invalid or missing product details",
//   },
//   "Delete Account": {
//     title: "Failed to delete Account",
//     message: "Please enter correct password",
//   },
//   "Confirm Change Password": {
//     title: "Failed to change password",
//     message: "Invalid Credentials",
//   },
//   LOGIN: { title: "Login Failed", message: "Invalid Credentials" },
// };

// API endpoints
export const endpoints = {
  "Sign Up": "user/signup",
  "Add Product": "product/addProduct",
  "Delete Account": "user/delete",
  "Confirm Change Password": "user/update/password",
  LOGIN: "user/signin",
};
