import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import { useEffect, useState } from "react";
import { getCart, removeCartItem } from "../../api/cart.api";

export default function CartScreen() {

  const [cart, setCart] = useState<any[]>([]);
  const [total, setTotal] = useState(0);

  const fetchCart = async () => {
    try {

      const res = await getCart();

      const items = res.data.items || [];

      setCart(items);

      let sum = 0;

      items.forEach((item: any) => {
        sum += item.price * item.quantity;
      });

      setTotal(sum);

    } catch (error) {
      console.log(error);
    }
  };

  const handleRemove = async (id: string) => {
    try {

      await removeCartItem(id);

      fetchCart();

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Cart</Text>

      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (

          <View style={styles.item}>

            <Text style={styles.name}>
              {item.product.title}
            </Text>

            <Text>
              ₹ {item.price} x {item.quantity}
            </Text>

            <Pressable
              style={styles.remove}
              onPress={() => handleRemove(item.id)}
            >
              <Text style={styles.removeText}>Remove</Text>
            </Pressable>

          </View>

        )}
      />

      <View style={styles.footer}>

        <Text style={styles.total}>
          Total: ₹ {total}
        </Text>

        <Pressable style={styles.checkout}>
          <Text style={styles.checkoutText}>
            Checkout
          </Text>
        </Pressable>

      </View>

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
  },

  item: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8
  },

  name: {
    fontSize: 18,
    fontWeight: "bold"
  },

  remove: {
    marginTop: 8
  },

  removeText: {
    color: "red"
  },

  footer: {
    marginTop: 20
  },

  total: {
    fontSize: 20,
    fontWeight: "bold"
  },

  checkout: {
    backgroundColor: "#2563eb",
    padding: 12,
    borderRadius: 6,
    marginTop: 10
  },

  checkoutText: {
    color: "white",
    textAlign: "center"
  }

});
