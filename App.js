const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import IPhone14Pro3 from "./screens/IPhone14Pro3";
import IPhone14Pro2 from "./screens/IPhone14Pro2";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    Lato_regular: require("./assets/fonts/Lato_regular.ttf"),
    Lato_medium: require("./assets/fonts/Lato_medium.ttf"),
    Lato_bold: require("./assets/fonts/Lato_bold.ttf"),
    Lato_extrabold: require("./assets/fonts/Lato_extrabold.ttf"),
    Lato_black: require("./assets/fonts/Lato_black.ttf"),
    "Exo 2_bold": require("./assets/fonts/Exo_2_bold.ttf"),
    Roboto_bold: require("./assets/fonts/Roboto_bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="IPhone14Pro3"
              component={IPhone14Pro3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14Pro2"
              component={IPhone14Pro2}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
