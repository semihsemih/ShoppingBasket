import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

import Dropdown from "./Dropdown";

function ProductInput(props) {
  const [productName, setProductName] = useState("");
  const [productQuantity, setProductQuantity] = useState(1);
  const [productMeasure, setProductMeasure] = useState(null);
  const [productLocation, setProductLocation] = useState("");

  let units = [
    { id: 1, name: "kg" },
    { id: 2, name: "piece" },
    { id: 3, name: "liter" },
    { id: 3, name: "meter" },
  ];

  function prodcutNameInputHandler(name) {
    setProductName(name);
  }

  function prodcutQuantityInputHandler(enteredNumber) {
    setProductQuantity(parseInt(parseFloat(enteredNumber)));
  }

  function productMeasureInputHandler(item) {
    setProductMeasure(item);
  }

  function productLocationHandler(location) {
    setProductLocation(location);
  }

  function addProductHandler() {
    props.onAdd({
      name: productName,
      quantity: productQuantity,
      measure: productMeasure,
      location: productLocation,
    });

    setProductName("");
    setProductQuantity(1);
    setProductMeasure(null);
    setProductLocation("");
  }

  return (
    <View>
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Product Name"
            onChangeText={prodcutNameInputHandler}
            value={productName}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Quantity"
            onChangeText={prodcutQuantityInputHandler}
            value={productQuantity.toString()}
            keyboardType="numeric"
          />
          <Dropdown
            data={units}
            onSelect={productMeasureInputHandler}
            value={productMeasure}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Location"
            onChangeText={productLocationHandler}
            value={productLocation}
          />
          <View style={styles.buttonContainer}>
            <Button title="Cancel" onPress={props.onCancel} />
            <Button title="Add" onPress={addProductHandler} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#eeeeee",
    backgroundColor: "#eeeeee",
    color: "#000000",
    borderRadius: 6,
    width: "100%",
    padding: 16,
    marginBottom: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
    alignSelf: "center",
  },
});

export default ProductInput;
