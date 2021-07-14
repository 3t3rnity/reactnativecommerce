import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Ionicons from "react-native-vector-icons/Ionicons";
import moment from "moment";
import "moment/locale/ru";
import DatePicker from "react-native-datepicker";
import { changeAuth } from "../redux/actionCreators/appActions";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  TextInput,
} from "react-native";

const SheduleScreen = ({ navigation, route }) => {
  const scheduleScreenReducer = useSelector(
    (state) => state.scheduleScreenReducer
  );
  const dispatch = useDispatch();
  var localLocale = moment().locale("ru");
  console.log(localLocale.format("LLLL"));
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.filter}>
          <View>
            <Text style={styles.textDay}>{moment().format("dddd")}</Text>
            <Text style={styles.text}>{moment().format("LL")}</Text>
          </View>
          <View style={styles.calendar}>
            <DatePicker
              hideText="false"
              onDateChange={(date) => {
                this.setState({ date: date });
              }}
            />
          </View>
        </View>
        <View style={styles.filter}>
          {scheduleScreenReducer.tabItems.map((el, id) => (
            <TouchableOpacity style={styles.filterItem} key={id}>
              {el.img && <Ionicons name={el.img} size={16} color="white" />}
              <Text
                style={
                  id === 0
                    ? styles.text
                    : [
                        styles.text,
                        {
                          marginLeft: 5,
                        },
                      ]
                }
              >
                {el.text}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <StatusBar style="auto" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: "100%",
    backgroundColor: "#1E1E1E",
  },
  wrapper: {
    minHeight: "100%",
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#1E1E1E",
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
    flex: 1,
  },
  searchDataItem: {
    paddingHorizontal: "5%",
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  searchInput: {
    width: "90%",
    color: "white",
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
    color: "white",
  },
  textDay: {
    color: "white",
    fontSize: 22,
  },
});
export default SheduleScreen;
