import { View, ScrollView, Text } from "react-native";
import { Button } from "react-native-paper";
import SafeAreaViewAndroid from "../components/SafeAreaViewAndroid";

const Main = ({ navigation }) => {
  const pressHandler = () => {
    navigation.navigate("Register");
  };

  return (
    <View style={{ backgroundColor: "gray" }}>
      <ScrollView>
        <Text>Home</Text>
        <Button
          style={{ backgroundColor: "red", margin: 40 }}
          onPress={pressHandler}
        >
          <Text style={{ color: "white" }}>Screen1</Text>
        </Button>
      </ScrollView>
    </View>
  );
};

const Home = ({ navigation }) => {
  return <SafeAreaViewAndroid Component={Main} navigation={navigation} />;
};

export default Home;
