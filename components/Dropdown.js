import { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
} from "react-native";

function Dropdown({ data = [], value = {}, onSelect = () => {} }) {
  const [showOptions, setShowOptions] = useState(false);

  function onSelectedItem(val) {
    setShowOptions(false);
    onSelect(val);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.dropdown}
        activeOpacity={0.8}
        onPress={() => setShowOptions(!showOptions)}
      >
        <Text>{!!value ? value?.name : `Choose an options`}</Text>
        <Image
          style={{ transform: [{ rotate: showOptions ? "180deg" : "0deg" }] }}
          source={require("../assets/images/arrow_dropdown.png")}
        />
      </TouchableOpacity>
      {showOptions && (
        <View style={{ maxHeight: 150 
        }}>
          <ScrollView>
            {data.map((val, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  onPress={() => onSelectedItem(val)}
                  style={{
                    backgroundColor: value?.id == val?.id ? "pink" : "white",
                    paddingVertical: 8,
                    borderRadius: 4,
                    paddingHorizontal: 6,
                  }}
                >
                  <Text>{val.name}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  dropdown: {
    borderWidth: 1,
    borderColor: "#eeeeee",
    backgroundColor: "#eeeeee",
    color: "#000000",
    borderRadius: 6,
    width: "100%",
    paddingVertical: 2,
    paddingHorizontal: 16,
    marginBottom: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Dropdown;
