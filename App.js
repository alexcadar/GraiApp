import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screens/Home";
import Contact from "./src/screens/contact";
import Preturi from "./src/screens/preturi";
import { MaterialIcons } from "@expo/vector-icons";
import CustomDrawer from "./src/screens/drawer";
import { Image } from "react-native";

const homeStack = createStackNavigator();
const contactStack = createStackNavigator();
const preturiStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const homeStackScreen = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#E6E7E9",
        height: 95,
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <Stack.Screen
      name="Acasă"
      component={Home}
      options={{
        headerLeft: () => (
          <MaterialIcons.Button
            name="menu"
            size={45}
            backgroundColor="#E6E7E9"
            color="black"
            onPress={() => navigation.openDrawer()}
          ></MaterialIcons.Button>
        ),
        headerTitle: () => (
          <Image
            style={{
              width: 70,
              height: 60,
              alignSelf: "center",
              marginRight: "15%",
              marginTop: "0%",
            }}
            source={require("./src/images/logopng.png")}
          />
        ),
      }}
    />
  </Stack.Navigator>
);

const contactStackScreen = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#E6E7E9",
        height: 95,
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <Stack.Screen
      name="Contact"
      component={Contact}
      options={{
        headerLeft: () => (
          <MaterialIcons.Button
            name="menu"
            size={45}
            backgroundColor="#E6E7E9"
            color="black"
            onPress={() => navigation.openDrawer()}
          ></MaterialIcons.Button>
        ),
        headerTitle: () => (
          <Image
            style={{
              width: 70,
              height: 60,
              alignSelf: "center",
              marginRight: "15%",
              marginTop: "0%",
            }}
            source={require("./src/images/logopng.png")}
          />
        ),
      }}
    />
  </Stack.Navigator>
);

const preturiStackScreen = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#E6E7E9",
        height: 95,
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <Stack.Screen
      name="Preturi"
      component={Preturi}
      options={{
        headerLeft: () => (
          <MaterialIcons.Button
            name="menu"
            size={45}
            backgroundColor="#E6E7E9"
            color="black"
            onPress={() => navigation.openDrawer()}
          ></MaterialIcons.Button>
        ),
        headerTitle: () => (
          <Image
            style={{
              width: 70,
              height: 60,
              alignSelf: "center",
              marginRight: "15%",
              marginTop: "0%",
            }}
            source={require("./src/images/logopng.png")}
          />
        ),
      }}
    />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
        <Drawer.Screen name="Acasă" component={homeStackScreen} />
        <Drawer.Screen name="Prețuri" component={preturiStackScreen} />
        <Drawer.Screen name="Contact" component={contactStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
