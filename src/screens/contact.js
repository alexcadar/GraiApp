import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../header";
import { WebView } from "react-native-webview";

export default function Contact() {
  return (
    <WebView
      source={{ uri: "https://grai.ogradamea.ro#contact" }}
      startInLoadingState={true}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6E7E9",
  },
  text: {
    fontSize: 28,
    color: "#2E2E2D",
    textAlign: "center",
    fontWeight: "normal",
    fontFamily: "sans-serif",
  },
});
