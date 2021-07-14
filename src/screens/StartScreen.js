import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGoods } from "../redux/actionCreators/mainActions";
import GoodItem from "./components/GoodItem";
import { commerce } from "../ecommerce";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

const StartScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const mainReducer = useSelector((state) => state.mainReducer);
  useEffect(() => {
    dispatch(
      fetchGoods({
        category_slug: ["hot"],
      })
    );
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={mainReducer.goods}
        refreshing={false}
        onRefresh={() => {
          dispatch(
            fetchGoods({
              category_slug: ["hot"],
            })
          );
        }}
        renderItem={(el, id) => {
          if (
            mainReducer.cart.find((item) => item.item.id === el.item.id) !==
            undefined
          ) {
            return (
              <GoodItem
                inCart={true}
                prodId={el.item.id}
                navigation={navigation}
                fullItem={el.item}
                imgPath={el.item.media.source}
                name={el.item.name}
                description={el.item.description}
                price={el.item.price.formatted_with_code}
              />
            );
          } else {
            return (
              <GoodItem
                inCart={false}
                prodId={el.item.id}
                navigation={navigation}
                fullItem={el.item}
                imgPath={el.item.media.source}
                name={el.item.name}
                description={el.item.description}
                price={el.item.price.formatted_with_code}
              />
            );
          }
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});

export default StartScreen;
