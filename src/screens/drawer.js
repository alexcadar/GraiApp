import React from "react";
import { View, StyleSheet } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Title, Caption, Paragraph, Drawer, Text } from "react-native-paper";
import { MaterialIcons, Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { WebView } from "react-native-webview";

export default function CustomDrawer(props) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.draweContent}>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialIcons name="home" color={color} size={size} />
              )}
              label="Acasă"
              onPress={() => {
                props.navigation.navigate("Acasă");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Ionicons name="ios-pricetags" color={color} size={size} />
              )}
              label="Prețuri"
              onPress={() => {
                props.navigation.navigate("Prețuri");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialIcons
                  name="quick-contacts-mail"
                  color={color}
                  size={size}
                />
              )}
              label="Contact"
              onPress={() => {
                props.navigation.navigate("Contact");
              }}
            />
          </Drawer.Section>
          <Drawer.Section title="Adresă">
            <View style={styles.preference}>
              <Text> Str. Ana Aslan nr. 53/4, Cluj-Napoca</Text>
            </View>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={(color, size) => (
            <FontAwesome5 name="copyright" size={20} color={"black"} />
          )}
          label="Ograda Mea 2021"
          onPress={() => (
            <WebView
              source={{ uri: "https://ogradamea.ro" }}
              startInLoadingState={true}
            />
          )}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: { flex: 1 },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#fff",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
