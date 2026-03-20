import { View, Text, FlatList, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { getOrders } from "../../api/order.api";

export default function OrdersScreen() {

  const [orders, setOrders] = useState<any[]>([]);

  const fetchOrders = async () => {
    try {

      const res = await getOrders();

      setOrders(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <View style={styles.container}>

      <Text style={styles.title}>My Orders</Text>

      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (

          <View style={styles.order}>

            <Text style={styles.orderId}>
              Order ID: {item.id}
            </Text>

            {item.items.map((i: any) => (
              <Text key={i.id}>
                {i.product.title} x {i.quantity} - ₹{i.price}
              </Text>
            ))}

          </View>

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
  },

  order: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8
  },

  orderId: {
    fontWeight: "bold",
    marginBottom: 5
  }

});