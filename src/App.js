import "react-native-gesture-handler";
import React, { useState } from "react";
import { Provider } from "react-redux";
import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./redux/reducers/rootReducer";
import RouteProvider from "./RouteProvider";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

const fetchFonts = () =>
  Font.loadAsync({
    Montserrat: require("../assets/fonts/Montserrat-Regular.ttf"),
  });

const App = () => {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(e) => console.error(e)}
      />
    );
  }

  return (
    <Provider store={store}>
      <RouteProvider />
    </Provider>
  );
};

export default App;
