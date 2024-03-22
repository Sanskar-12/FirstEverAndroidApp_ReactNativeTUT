import { View, ScrollView, Text } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Screen1 = () => {
  const navigation = useNavigation();

  const pressHandler = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={{ marginTop: 50, backgroundColor: "gray" }}>
      <ScrollView>
        <Text>Screen 1</Text>
        <Button
          style={{ backgroundColor: "red", margin: 40 }}
          onPress={pressHandler}
        >
          <Text style={{ color: "white" }}>Home</Text>
        </Button>
      </ScrollView>
    </View>
  );
};

export default Screen1;
