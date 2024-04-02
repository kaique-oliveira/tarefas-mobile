import { ThemeProvider } from "styled-components";
import { Container, Header, SafeArea } from "./styles";
import { useChangeTheme } from "../../hooks/ChangeTheme";
import { dark, light } from "../../theme";
import { Hightlight } from "../../components/Hightlight";
import { SwitchTheme } from "../../components/SwitchTheme";
import { WeekCalendar } from "../../components/WeekCalendar";
import { useState } from "react";

export const Home = () => {
  const { getTheme, onChangeTheme } = useChangeTheme();

  const [selecteDate, setSelectedDate] = useState(new Date());

  return (
    <ThemeProvider theme={getTheme === "dark" ? dark : light}>
      <SafeArea>
        <Container>
          <Header>
            <Hightlight />

            <SwitchTheme />
          </Header>

          <WeekCalendar
            selectedDate={selecteDate}
            onChangeDateSelected={setSelectedDate}
          />
        </Container>
      </SafeArea>
    </ThemeProvider>
  );
};
