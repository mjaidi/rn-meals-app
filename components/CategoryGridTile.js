import React from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
} from "react-native";
import Text from "./DefaultText";

const CategoryGridTile = ({ title, onSelect, color }) => {
  let TouchableComp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.gridItem}>
      <TouchableComp
        style={{ flex: 1, overflow: "hidden", borderRadius: 10 }}
        onPress={onSelect}
      >
        <View style={{ ...styles.container, ...{ backgroundColor: color } }}>
          <Text style={styles.title} numberOfLines={2}>
            {title}
          </Text>
        </View>
      </TouchableComp>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 3, height: 4 },
    shadowRadius: 10,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    justifyContent: "flex-end",
    padding: 10,
    alignItems: "flex-end",
    padding: 15,
    elevation: 5,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "right",
  },
});
