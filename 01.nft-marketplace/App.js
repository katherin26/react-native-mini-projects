import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";

import Home from "./screens/Home";
import Details from "./screens/Details";

/*NOTE: Custom Navigators = Navigators allow you to define your applocation's 
navigation structure.
Navigators also render common elements such as headers and tab bars which you can 
configure.
createStackNavigator = Renders one screen at a time and provides transitions 
between screens. When a new screen is opened it is a placed on top of the stack.

NOTE: NavigationContainer: is reponsible for managing your app state and linking your 
top-level navigator to the app enviroment.
*/

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const App = () => {
  const [loaded] = useFonts({});
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
