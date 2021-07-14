import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  deleteFromCart,
} from "../../redux/actionCreators/mainActions";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

const componentName = ({ route, navigation }) => {
  const fullItem = route.params.fullItem;
  const inCart = route.params.inCart;
  const mainReducer = useSelector((state) => state.mainReducer);
  const dispatch = useDispatch();
  const description = fullItem.description
    .split("<p>")
    .join()
    .split("</p>")[0]
    .slice(1);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: fullItem.media.source,
          }}
        />
      </View>
      <View style={styles.descriptionView}>
        <Text style={styles.name}>{fullItem.name}</Text>
        <Text style={styles.description}>{description}</Text>
        {!inCart ? (
          <TouchableOpacity
            style={styles.price}
            onPress={() => {
              dispatch(addToCart(fullItem, 1));
              navigation.goBack();
            }}
          >
            <Text>{fullItem.price.formatted_with_code}</Text>
            <Text>Добавить в корзину</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.price}
            onPress={() => {
              dispatch(deleteFromCart(fullItem.id));
              navigation.goBack();
            }}
          >
            <Text>Удалить из корзины</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    minWidth: "100%",
    minHeight: "100%",
  },
  imageContainer: {
    flex: 2,
    padding: 20,
    elevation: 10,
  },
  image: {
    flex: 1,
    resizeMode: "stretch",
  },
  descriptionView: {
    flex: 3,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  name: {
    fontSize: 24,
  },
  description: {
    fontSize: 14,
  },
  price: {
    fontSize: 18,
    marginRight: 18,
    padding: 14,
    borderWidth: 1,
    borderRadius: 16,
    alignItems: "center",
    alignSelf: "flex-end",
  },
  test: {
    backgroundColor: "red",
  },
});

export default componentName;
