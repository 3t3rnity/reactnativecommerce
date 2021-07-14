import { StatusBar } from "expo-status-bar";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, Text, View } from "react-native";

const ProfileScreen = () => {
  const mainReducer = useSelector((state) => state.mainReducer);

  return (
    <>
      <View style={styles.container}>
        <Text style={{ fontSize: 22, marginBottom: 20 }}>Ваш профиль</Text>
        {Object.entries(mainReducer.user).map((el) => (
          <Text style={styles.text}>{el[1]}</Text>
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
    backgroundColor: "white",
    justifyContent: "flex-start",
  },
  text: {
    fontSize: 18,
    marginBottom: 8,
  },
});

export default ProfileScreen;
