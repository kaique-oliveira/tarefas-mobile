import { ThemeProvider } from "styled-components";
import { Container } from "./styles";
import { useChangeTheme } from "../../hooks/ChangeTheme";
import { dark, light } from "../../theme";

export const Home = () => {
  const { getTheme, onChangeTheme } = useChangeTheme();

  return (
    <ThemeProvider theme={getTheme === "dark" ? dark : light}>
      <Container></Container>
    </ThemeProvider>
  );
};
