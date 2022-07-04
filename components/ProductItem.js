import { StyleSheet, Text, View } from "react-native";

function ProductItem(props) {
  return (
    <View style={styles.itemContainer}>
      <Text>{props.item.name}</Text>
      <View style={styles.quantityContainer}>
        <Text>{props.item.quantity}</Text>
        <Text>{props.item.measure.name}</Text>
      </View>
      <Text>{props.item.location}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default ProductItem;
