import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { TextInput, Button, Checkbox, Headline } from "react-native-paper";
import SafeAreaViewAndroid from "../components/SafeAreaViewAndroid";

const Main = ({ navigation }) => {
  const [checked, setChecked] = useState(false);

  return (
    <View
      style={{
        height: "100%",
      }}
    >
      <Headline style={styles.heading}>Register</Headline>
      <TextInput placeholder="Full Name" style={styles.inputs} />
      <TextInput placeholder="Email" style={styles.inputs} />
      <TextInput
        placeholder="Password"
        style={styles.inputs}
        secureTextEntry={true}
      />
      <View
        style={{
          alignSelf: "center",
          flexDirection: "row",
          alignItems: "center",
          margin: 20,
        }}
      >
        <Checkbox
          status={checked ? "checked" : "unchecked"}
          onPress={() => setChecked((prev) => !prev)}
        />
        <Text>Please accept all terms & conditions</Text>
      </View>

      <Button
        style={styles.btn}
        onPress={() => console.log("Registered")}
        disabled={checked ? false : true}
      >
        Register
      </Button>
    </View>
  );
};

const Register = ({ navigation }) => {
  return <SafeAreaViewAndroid Component={Main} navigation={navigation} />;
};

export default Register;

const styles = StyleSheet.create({
  inputs: {
    backgroundColor: "white",
    marginHorizontal: 50,
    marginVertical: 10,
  },
  heading: {
    textAlign: "center",
    marginVertical: 20,
    color: "rgba(108,21,222,1)",
    fontWeight: "bold",
  },
  btn: {
    backgroundColor: "tomato",
    borderRadius: 50,
    paddingVertical: 4,
    width: "60%",
    alignSelf: "center",
    color: "white",
  },
});
