import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import ProductInput from "./components/ProductInput";
import ProductItem from "./components/ProductItem";

export default function App() {
  const [basket, setBasket] = useState([]);

  function addProductHandler(enteredProductText) {
    setBasket((currentBasket) => [...currentBasket, enteredProductText]);
  }

  return (
    <View style={styles.appContainer}>
      <ProductInput onAdd={addProductHandler} />
      <View>
        <FlatList
          data={basket}
          renderItem={(itemData) => {
            return <ProductItem text={itemData.item} />;
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
