import React from "react";
import { StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

export default function Preturi() {
  return (
    <WebView
      source={{ uri: "https://grai.ogradamea.ro/#preturi" }}
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
