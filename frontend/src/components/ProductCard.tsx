import { View, Text, StyleSheet, Pressable } from "react-native";

interface Props {
  title: string;
  price: number;
  onAddToCart?: () => void;
}

export default function ProductCard({ title, price, onAddToCart }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>

      <Text style={styles.price}>₹ {price}</Text>

      <Pressable style={styles.button} onPress={onAddToCart}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </Pressable>
    </View>
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

  title: {
    fontSize: 18,
    fontWeight: "bold"
  },

  price: {
    fontSize: 16,
    marginVertical: 8
  },

  button: {
    backgroundColor: "#2563eb",
    padding: 10,
    borderRadius: 6
  },

  buttonText: {
    color: "#fff",
    textAlign: "center"
  }
});
