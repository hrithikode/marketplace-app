import { View, Text, StyleSheet, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ShopCard from "../../components/ShopCard";

const shops = [
  {
    id: "1",
    name: "Cement Store",
    distance: "1.2 km",
    rating: 4.5
  },
  {
    id: "2",
    name: "Building Materials Shop",
    distance: "2 km",
    rating: 4.2
  }
];

export default function HomeScreen() {

  const navigation = useNavigation<any>();

  return (

    <View style={styles.container}>

      <Text style={styles.title}>Nearby Shops</Text>

      <FlatList
        data={shops}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (

          <ShopCard
            name={item.name}
            distance={item.distance}
            rating={item.rating}
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

  container: {
    flex: 1,
    padding: 20
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  }

});