import { View, Text, StyleSheet, Pressable } from "react-native";

interface Props {
  name: string;
  distance: string;
  rating: number;
  onPress: () => void;
}

export default function ShopCard({ name, distance, rating, onPress }: Props) {

  return (

    <Pressable style={styles.card} onPress={onPress}>

      <Text style={styles.name}>{name}</Text>

      <Text>Distance: {distance}</Text>

      <Text>Rating: ⭐ {rating}</Text>

    </Pressable>

  );
}

const styles = StyleSheet.create({

  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 2
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6
  }

});