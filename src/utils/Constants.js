// Static common values for layouts
export const marginHorizontal = 40;
export const buttonFontSize = 18;
export const marginVertical = 15;
export const smallFontSize = 16;
export const counterButtonSize = 40;

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
  "Add Product": "product/add",
  "Delete Account": "user/delete",
  "Confirm Change Password": "user/update/password",
  LOGIN: "user/signin",
};

export const LoremIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque elit, mollis ac ipsum sagittis, dapibus porttitor nibh. Praesent orci felis, convallis vitae facilisis quis, fringilla non eros. Sed ac tempus elit. Curabitur cursus mauris at leo porttitor, euismod ullamcorper leo rutrum. Fusce rhoncus, neque at suscipit luctus, mi risus sodales justo, vitae laoreet tortor ligula ut justo. Vestibulum et elementum risus. Fusce luctus in orci at faucibus. Phasellus augue ligula, condimentum id pharetra sed, sollicitudin vitae risus. Suspendisse potenti. Aliquam a dui sit amet enim maximus vulputate nec sed nibh. Aliquam iaculis vitae ligula et lacinia. Vivamus a ipsum ut ligula aliquet mollis sed a nunc. Etiam ullamcorper semper pharetra. Mauris vel dui eros. Curabitur ullamcorper odio velit, vitae facilisis urna scelerisque et. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n Etiam semper blandit mi sit amet tempus. Proin mollis ultricies nisi quis consectetur. Integer aliquet rhoncus dolor, in pretium leo posuere non. Donec non volutpat turpis. Morbi pulvinar, mi tincidunt bibendum ultricies, ligula erat ullamcorper neque, tincidunt posuere nisl lorem eu est. Nunc a accumsan purus. Sed luctus ornare erat, ut hendrerit libero suscipit in. Aliquam varius turpis sed consectetur consequat. Pellentesque at vulputate risus. Duis dolor lectus.";
