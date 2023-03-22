import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import HomePage from "./screen/HomePage";
import ProfileDiri from "./screen/ProfileDiri";
import LaguKu from "./screen/LaguKu";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfileDiri"
          component={ProfileDiri}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LaguKu"
          component={LaguKu}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
