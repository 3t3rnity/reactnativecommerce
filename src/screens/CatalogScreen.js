import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, Text, View, TextInput, FlatList } from "react-native";
import { fetchCatalogGoods } from "../redux/actionCreators/mainActions";
import GoodItem from "./components/GoodItem";
import Select from "./components/Select";

const CatalogScreen = ({ navigation, route }) => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const mainReducer = useSelector((state) => state.mainReducer);

  useEffect(() => {
    dispatch(
      fetchCatalogGoods({
        category_slug: [mainReducer.category],
      })
    );
  }, [mainReducer.category]);

  return (
    <View style={styles.container}>
      <View style={styles.select}>
        <Text style={{ marginBottom: 8 }}>Выберите категорию</Text>
        <Select />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Поиск по названию товара"
          value={search}
          onChangeText={setSearch}
        />
      </View>
      <View style={styles.contentWrapper}>
        {mainReducer.catalogGoods ? (
          <FlatList
            data={mainReducer.catalogGoods}
            refreshing={false}
            onRefresh={() => {
              dispatch(
                fetchCatalogGoods({
                  category_slug: [mainReducer.category],
                })
              );
            }}
            keyExtractor={(item) => item.id}
            renderItem={(el, id) => {
              if (
                el.item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
              ) {
                if (
                  mainReducer.cart.find(
                    (item) => item.item.id === el.item.id
                  ) !== undefined
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
              } else {
                return null;
              }
            }}
          />
        ) : (
          <Text style={{ marginTop: 24, fontSize: 18 }}>
            Товаров данной категории еще нет
          </Text>
        )}
      </View>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  inputContainer: {
    borderWidth: 1,
  },
  input: {
    backgroundColor: "white",
    minWidth: "100%",
    height: 50,
  },
  select: {
    flex: 1,
  },
  contentWrapper: {
    flex: 5,
  },
});
export default CatalogScreen;
