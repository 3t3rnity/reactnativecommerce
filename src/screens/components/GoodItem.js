import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  deleteFromCart,
} from "../../redux/actionCreators/mainActions";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const GoodItem = ({
  imgPath,
  price,
  fullItem,
  name,
  prodId,
  navigation,
  inCart,
}) => {
  const dispatch = useDispatch();
  const mainReducer = useSelector((state) => state.mainReducer);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate("extended", {
          fullItem: fullItem,
          inCart: inCart,
        });
      }}
    >
      <Image
        style={styles.image}
        source={{
          uri: imgPath,
        }}
      />
      <View style={styles.description}>
        <View style={styles.descriptionText}>
          <Text style={styles.text}>{name}</Text>
        </View>
        <View style={styles.descriptionButton}>
          {inCart ? (
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                dispatch(deleteFromCart(prodId));
                console.log(mainReducer.cart);
              }}
            >
              <Text>{price}</Text>
              <Text>Удалить из корзины</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                dispatch(addToCart(fullItem, 1));
                console.log(mainReducer.cart);
              }}
            >
              <Text>{price}</Text>
              <Text>В корзину</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
    padding: 15,
    backgroundColor: "white",
    height: 250,
    minWidth: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,

    elevation: 20,
  },
  image: {
    marginBottom: 10,
    flex: 2,
    height: "60%",
    width: "100%",
    // borderColor: "black",
    // borderWidth: 1,
  },
  description: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "row",
  },
  descriptionText: {
    flex: 4,
  },
  descriptionButton: {
    flex: 2,
  },
  text: {
    // minHeight: 20,
    // backgroundColor: "black",
  },
  button: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});

export default GoodItem;
