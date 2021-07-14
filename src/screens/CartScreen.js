import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/actionCreators/mainActions";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";

const CartScreen = ({ navigation }) => {
  const mainReducer = useSelector((state) => state.mainReducer);
  let [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    if (mainReducer.cart.length === 0) {
      setTotalPrice(0);
    }
    mainReducer.cart.map((el) => {
      console.log(typeof el.item.price.raw);
      let pricetotal = 0;
      mainReducer.cart.map((el) => {
        pricetotal += el.item.price.raw;
      });
      setTotalPrice(pricetotal);
    });
  }, [mainReducer.cart.length]);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.paymentText}>Корзина</Text>
        <View style={styles.searchData}>
          <FlatList
            data={mainReducer.cart}
            keyExtractor={(item) => item.item.id}
            renderItem={({ item, id }) => (
              <TouchableOpacity
                style={styles.searchDataItem}
                onPress={() => {
                  navigation.navigate("extended", {
                    fullItem: item.item,
                    inCart: true,
                    navigation: navigation,
                  });
                }}
              >
                <Text style={[styles.text, { marginLeft: 16, fontSize: 16 }]}>
                  {item.item.name}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={styles.payment}>
          <Text style={{ fontSize: 18 }}>Общая стоимость: {totalPrice}</Text>
          <TouchableOpacity
            style={styles.paymentButton}
            onPress={() => {
              dispatch(clearCart());
              setTotalPrice(0);
            }}
          >
            <Text style={{ fontSize: 18 }}>Оплата</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: "100%",
    backgroundColor: "white",
  },
  payment: {
    borderWidth: 1,
    minWidth: "100%",
    flexDirection: "row",
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
  },
  paymentText: {
    fontSize: 24,
  },
  paymentButton: {
    flex: 1,
    alignItems: "center",
  },
  wrapper: {
    minHeight: "100%",
    flex: 1,
    paddingTop: 40,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  searchContainer: {
    flex: 1,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    maxWidth: "95%",
    maxHeight: 50,
    borderRadius: 20,
    color: "white",
    backgroundColor: "#4B4B4B",
  },
  searchData: {
    minWidth: "100%",
    maxHeight: "100%",
    flex: 9,
  },
  searchDataItem: {
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: "5%",
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  searchInput: {
    width: "90%",
    color: "#FFFFFF",
    fontFamily: "Montserrat",
  },
  filter: {
    marginTop: 10,
    flex: 1,
    minWidth: "100%",
    maxHeight: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  filterItem: {
    borderRadius: 20,
    padding: 15,
    height: "60%",
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "black",
    fontFamily: "Montserrat",
    fontSize: 12,
  },
});

export default CartScreen;
