import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

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
      <TextInput
        style={styles.textInput}
        placeholder="Add something..."
        onChangeText={prodcutInputHandler}
        value={enteredProductText}
      />
      <Button title="Add To basket" onPress={addProductHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
  },
});

export default ProductInput;
