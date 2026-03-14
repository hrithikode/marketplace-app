import { View, Text, Button } from "react-native";
import { useAuthStore } from "../../store/auth.store";

export default function ProfileScreen() {

  const logout = useAuthStore((state) => state.logout);

  return (
    <View>
      <Text>Profile</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
}