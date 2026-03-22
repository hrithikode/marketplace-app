import { View, Text, FlatList, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import * as Location from "expo-location";
import ShopCard from "../../components/ShopCard";
import { api } from "../../api/axios";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {

  const [shops, setShops] = useState<any[]>([]);
  const navigation = useNavigation<any>();

  const fetchNearbyShops = async () => {
    try {

      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        console.log("Permission denied");
        return;
      }

      const location = await Location.getCurrentPositionAsync({});

      const lat = location.coords.latitude;
      const lng = location.coords.longitude;

      const res = await api.get(
        `/shops/nearby?lat=${lat}&lng=${lng}`
      );

      setShops(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNearbyShops();
  }, []);

  return (

    <View style={styles.container}>

      <Text style={styles.title}>Nearby Shops</Text>

      <FlatList
        data={shops}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (

          <ShopCard
            name={item.name}
            distance={`${item.distance.toFixed(2)} km`}
            rating={4.5}
            onPress={() =>
              navigation.navigate("Shop", { shopId: item.id })
            }
          />

        )}
      />

    </View>

  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  }
});