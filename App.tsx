import { ChangeThemeProvider } from "./src/hooks/ChangeTheme";
import Home from "./src/screens/Home";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  return (
    <ChangeThemeProvider>
      <Home />
    </ChangeThemeProvider>
  );
}
