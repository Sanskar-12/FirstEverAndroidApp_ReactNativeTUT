import { View, Text } from "react-native";
import React from "react";
import SafeAreaViewAndroid from "../components/SafeAreaViewAndroid";

const Main = ({ navigation }) => {
  return (
    <View>
      <Text>Register</Text>
    </View>
  );
};

const Register = ({ navigation }) => {
  return <SafeAreaViewAndroid Component={Main} navigation={navigation} />;
};

export default Register;
