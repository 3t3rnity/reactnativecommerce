import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeCategory } from "../../redux/actionCreators/mainActions";
import { StyleSheet, View, Text } from "react-native";
import { commerce } from "../../ecommerce";
import { Picker } from "@react-native-picker/picker";

const Select = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    commerce.categories.list().then((res) => {
      setCategories(res.data);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Picker
        style={{ flex: 1, color: "black" }}
        onValueChange={(itemValue, itemIndex) => {
          dispatch(changeCategory(itemValue));
        }}
      >
        {categories.map((el, id) => (
          <Picker.Item label={el.name} value={el.slug} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    minWidth: "100%",
    height: 50,
    backgroundColor: "white",
  },
});
export default Select;
