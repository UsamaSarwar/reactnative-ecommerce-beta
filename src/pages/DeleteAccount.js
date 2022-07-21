import Header from "../components/Header";
import { StyleSheet, View } from "react-native";
import CustomTextInput from "../components/CustomTextInput";
import LargeBlackButton from "../components/LargeBlackButton";
import { useEffect, useState } from "react";

const DeleteAccount = ({ route }) => {
  const [reqData, setReqData] = useState({});
  const [error, setError] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  useEffect(() => {
    console.log(route.params.token);

    setReqData({ token: route.params.token });
  }, []);

  return (
    <View style={styles.container}>
      <Header content="Delete Account" flex={1} />
      <CustomTextInput
        type="password"
        required={true}
        setIsValid={setIsPasswordValid}
        toggleError={error}
        setReqData={setReqData}
        reqData={reqData}
      />
      <LargeBlackButton
        changeTo="deleteAccount"
        btnText="Delete Account"
        isValid={true}
        req={reqData}
        setError={setError}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default DeleteAccount;
