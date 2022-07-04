import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";

import ProductInput from "./components/ProductInput";
import ProductItem from "./components/ProductItem";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [basket, setBasket] = useState([
    {
      name: "Salça",
      quantity: 12,
      measure: { id: 1, name: "kg" },
      location: "Bim",
    },
    {
      name: "Su",
      quantity: 5,
      measure: { id: 2, name: "liter" },
      location: "A101",
    },
  ]);

  function addProductHandler(enteredProduct) {
    setBasket((currentBasket) => [...currentBasket, enteredProduct]);
    endAddProduct();
  }

  function startAddProduct() {
    setModalIsVisible(true);
  }

  function endAddProduct() {
    setModalIsVisible(false);
  }

  return (
    <View style={styles.appContainer}>
      <Button title="Add New Product" onPress={startAddProduct} />
      <ProductInput
        visible={modalIsVisible}
        onAdd={addProductHandler}
        onCancel={endAddProduct}
      />
      <View>
        <FlatList
          data={basket}
          renderItem={(itemData) => {
            return <ProductItem item={itemData.item} />;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
});
