import { Circle, RadioButton } from "phosphor-react-native";
import { Container, Title } from "./styles";
import { useTheme } from "styled-components";
import { Touchable, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  state: boolean;
  text: string;
};

export const TaskState = ({ state, text, ...rest }: Props) => {
  const theme = useTheme();

  return (
    <Container {...rest} variant={state ? "active" : "neutral"}>
      {state ? (
        <RadioButton
          size={16}
          weight="fill"
          color={state ? "white" : theme.COLORS.NEUTRAL_200}
        />
      ) : (
        <Circle
          size={16}
          weight="bold"
          color={state ? "white" : theme.COLORS.NEUTRAL_200}
        />
      )}
      <Title variant={state ? "active" : "neutral"}>{text}</Title>
    </Container>
  );
};
