import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

function ProductInput(props) {
  const [enteredProductText, setEnteredProductText] = useState("");

  function prodcutInputHandler(enteredText) {
    setEnteredProductText(enteredText);
  }

  function addProductHandler() {
    props.onAdd(enteredProductText);
    setEnteredProductText("");
  }

  return (
    <View>
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Add product..."
            onChangeText={prodcutInputHandler}
            value={enteredProductText}
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
    alignItems: "center",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#eeeeee",
    backgroundColor: "#eeeeee",
    color: "#000000",
    borderRadius: 6,
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
});

export default ProductInput;
