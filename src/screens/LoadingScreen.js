import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Ionicons name="code-working" size={128} color="black" />
        <Text style={{ fontSize: 24 }}>Просто_магазин</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LoadingScreen;
