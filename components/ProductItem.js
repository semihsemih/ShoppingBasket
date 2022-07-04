import { TouchableOpacity, StyleSheet, Text, View, Image } from "react-native";

function ProductItem(props) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemDetailContainer}>
        <Text style={styles.itemDetailText}>{props.item.name}</Text>
        <Text style={styles.itemDetailText}>
          {props.item.quantity} {props.item.measure.name}
        </Text>
        <Text style={styles.itemDetailText}>{props.item.location}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <Image
            style={styles.actionButtonImage}
            source={require("../assets/images/delete.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Image
            style={styles.actionButtonImage}
            source={require("../assets/images/edit.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "green",
    margin: 4,
    paddingLeft: 4,
  },
  itemDetailContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemDetailText: {
    color: "white",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 8,
    padding: 8,
    backgroundColor: "red",
  },
  actionButton: {
    padding: 4,
  },
  actionButtonImage: {
    width: 20,
    height: 20,
  },
});

export default ProductItem;
