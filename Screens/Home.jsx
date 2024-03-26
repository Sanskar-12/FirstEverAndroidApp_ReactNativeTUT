import { View, Text } from "react-native";
import { Button, Appbar, Avatar, Headline } from "react-native-paper";
import SafeAreaViewAndroid from "../components/SafeAreaViewAndroid";

const Main = ({ navigation }) => {
  const pressHandler = () => {
    navigation.navigate("Register");
  };

  return (
    <View
      style={{
        backgroundColor: "white",
        height: "100%",
      }}
    >
      <Appbar
        style={{
          backgroundColor: "#90E0EF",
        }}
      >
        <Appbar.Action icon={"heart"} onPress={() => console.log("heart")} />

        <Appbar.Content title="Wow" />

        <Appbar.Action
          icon={"account-box-multiple"}
          onPress={() => console.log("account-box-multiple")}
        />
        <Appbar.Action
          icon={"bus-marker"}
          onPress={() => console.log("bus-marker")}
        />
      </Appbar>

      <Avatar.Image
        source={{
          uri: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
        }}
        size={160}
        style={{
          alignSelf: "center",
          margin: 40,
        }}
      />

      <Button
        style={{ backgroundColor: "blue", marginHorizontal: 60 }}
        onPress={pressHandler}
      >
        <Text style={{ color: "white" }}>Register</Text>
      </Button>
      <Headline
        style={{
          textAlign: "center",
          marginTop: 20,
        }}
      >
        About Me
      </Headline>
      <Text
        style={{
          textAlign: "center",
          width: "50%",
          alignSelf: "center",
          marginTop: 30,
        }}
      >
        Hey, My name is Sanskar Vishwakarma. I am a Full Stack App Developer.
      </Text>
    </View>
  );
};

const Home = ({ navigation }) => {
  return <SafeAreaViewAndroid Component={Main} navigation={navigation} />;
};

export default Home;
