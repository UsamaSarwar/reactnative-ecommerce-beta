// import { useState } from "react";
// import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
// import { marginHorizontal } from "../Constants";
// import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

// const PasswordComponent = () => {
//   const [text, setText] = useState("");
//   const [isSecureEntry, setIsSecureEntry] = useState(true);

//   const onChange = (e) => {
//     setText(e.nativeEvent.text);
//   };

//   return (
//     <TextInput
//       style={styles.input}
//       value={text}
//       placeholderTextColor="#8f8f8f"
//       placeholder="Password"
//       onChange={onChange}
//       secureTextEntry={isSecureEntry}
//       icon={
//         <TouchableOpacity
//           onPress={() => {
//             setIsSecureEntry((prev) => !prev);
//           }}
//         >
//           <FontAwesome5
//             style={{ paddingRight: 15 }}
//             name={isSecureEntry ? "eye" : "eye-slash"}
//             size={20}
//             color="gray"
//           />
//         </TouchableOpacity>
//       }
//     />
//   );
// };

// const styles = StyleSheet.create({
//   input: {
//     alignSelf: "stretch",
//     marginHorizontal: marginHorizontal,
//     paddingBottom: 10,
//     fontSize: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: "#8f8f8f",
//   },
// });

// export default PasswordComponent;
