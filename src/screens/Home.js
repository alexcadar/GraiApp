import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableHighlight,
  Linking,
  Image,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Header from "../header";

const Separator = () => <View style={styles.separator} />;

const call = () => Linking.openURL(`tel: 0364431884`);

const Home = () => (
  <View style={styles.head}>
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.text}>
          Apasă butonul pentru a transmite numărul de ore lucrate
        </Text>
        <Separator />
        <TouchableHighlight
          style={styles.button}
          onPress={call}
          underlayColor="#E6E7E9"
        >
          {/* <Text style={styles.buttonText}>Apasa-ma</Text> */}
          <Image
            style={styles.image}
            source={require("../images/callButton.png")}
          />
        </TouchableHighlight>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    color: "#2E2E2D",
    textAlign: "center",
    fontWeight: "normal",
    fontFamily: "sans-serif",
  },
  separator: {
    borderTopColor: "#737373",
    borderTopWidth: StyleSheet.hairlineWidth,
    marginVertical: 20,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
    fontFamily: "sans-serif",
    fontSize: 24,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#E6E7E9",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  head: {
    flex: 1,
  },
  image: {
    width: 200,
    height: 150,
    shadowColor: "#2E2E2D",
    shadowOffset: {
      width: 10,
      height: 100,
    },
    shadowRadius: 50,
  },
});
export default Home;
