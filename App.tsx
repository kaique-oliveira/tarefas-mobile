import { ChangeThemeProvider } from "./src/hooks/ChangeTheme";
import Home from "./src/screens/Home";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ChangeThemeProvider>
      <Home />
    </ChangeThemeProvider>
  );
}
