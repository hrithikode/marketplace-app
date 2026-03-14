import { View, Text, FlatList, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import ProductCard from "../../components/ProductCard";
import { addToCart } from "../../api/cart.api";

const products = [
  {
    id: "1",
    title: "Cement Bag",
    price: 350
  },
  {
    id: "2",
    title: "Sand (1 Ton)",
    price: 1200
  }
];

export default function ShopScreen() {

  const route = useRoute<any>();
  const { shopId } = route.params;

  const handleAddToCart = async (productId: string) => {
    try {

      await addToCart({
        productId,
        quantity: 1
      });

      console.log("Added to cart");

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Shop ID: {shopId}</Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard
            title={item.title}
            price={item.price}
            onAddToCart={() => handleAddToCart(item.id)}
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
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20
  }
});

