import { useEffect, useState } from "react";
import { Circle, Container } from "./styles";
import { Sun, Moon } from "phosphor-react-native";
import { useChangeTheme } from "../../hooks/ChangeTheme";

export const SwitchTheme = () => {
  const { onChangeTheme } = useChangeTheme();

  const [toggleTheme, setToggleTheme] = useState(false);

  const leftSide = {
    from: {
      marginLeft: 26,
    },
    to: {
      marginLeft: 0,
    },
  };

  const rightSide = {
    from: {
      marginLeft: 0,
    },
    to: {
      marginLeft: 26,
    },
  };

  useEffect(() => {
    if (toggleTheme) {
      onChangeTheme("dark");
    } else {
      onChangeTheme("light");
    }
  }, [toggleTheme]);

  return (
    <Container onPress={() => setToggleTheme(!toggleTheme)} activeOpacity={1}>
      <Circle
        style={{ backgroundColor: toggleTheme ? "#4600A1" : "#FFBA08" }}
        duration={300}
        animation={toggleTheme ? rightSide : leftSide}
      >
        {toggleTheme ? (
          <Moon color="white" size={20} />
        ) : (
          <Sun color="white" size={20} />
        )}
      </Circle>
    </Container>
  );
};
