import { View, ScrollView, Text } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  const pressHandler = () => {
    navigation.navigate("Screen1");
  };

  return (
    <View style={{ marginTop: 50, backgroundColor: "gray" }}>
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

export default Home;
