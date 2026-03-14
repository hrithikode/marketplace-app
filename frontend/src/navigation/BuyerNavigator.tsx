import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/buyer/HomeScreen";
import ShopScreen from "../screens/buyer/ShopScreen";

const Stack = createNativeStackNavigator();

export default function BuyerNavigator() {
  return (
    <Stack.Navigator>

      <Stack.Screen name="Home" component={HomeScreen} />

      <Stack.Screen name="Shop" component={ShopScreen} />

    </Stack.Navigator>
  );
}