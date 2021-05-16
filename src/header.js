import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header({ navigation }) {
  return (
    <View style={styles.header}>
      <MaterialIcons name="menu" size={45} style={styles.icon} />

      <Image style={styles.image} source={require("./images/logopng.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 95,
    paddingTop: 30,
    backgroundColor: "#E6E7E9",
    borderBottomWidth: 0.2,

    shadowColor: "#2E2E2D",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  title: {
    fontSize: 30,
    color: "#2E2E2D",
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    width: 70,
    height: 60,
    alignSelf: "center",
  },
  icon: {
    position: "absolute",
    left: "6%",
    top: "60%",
  },
  onPress: {
    opacity: 0.5,
  },
});
