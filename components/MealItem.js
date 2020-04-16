import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Text from "./DefaultText";

const MealItem = (props) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity style={styles.touchable} onPress={props.onSelectMeal}>
        <View style={styles.mealColumn}>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground
              source={{ uri: props.image }}
              style={styles.bgImage}
            >
              <Text numberOfLines={1} style={styles.title}>
                {props.title}
              </Text>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <Text>{props.duration} m</Text>
            <Text>{props.complexity.toUpperCase()}</Text>
            <Text>{props.affordability.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: "92.5%",
    margin: 15,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 3, height: 4 },
    shadowRadius: 10,
  },
  touchable: { flex: 1, borderRadius: 5, overflow: "hidden", elevation: 4 },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontWeight: "bold",
    fontSize: 22,
    color: "white",
    backgroundColor: "rgba(0,0,0,0.4)",
    paddingVertical: 5,
    paddingHorizontal: 12,
    textAlign: "center",
  },
  mealColumn: {},
  mealRow: {
    flexDirection: "row",
  },
  mealHeader: {
    height: "85%",
  },
  mealDetail: {
    paddingHorizontal: 5,
    height: "15%",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#eee",
  },
});
