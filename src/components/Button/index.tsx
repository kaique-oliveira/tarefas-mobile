import { TouchableOpacityProps } from "react-native";
import { Container, Title, variantButtonType } from "./styles";

type Props = TouchableOpacityProps & {
  variant?: variantButtonType;
  title: string;
};

export const Button = ({ variant = "contained", title, ...rest }: Props) => {
  return (
    <Container {...rest} variant={variant}>
      <Title variant={variant}>{title}</Title>
    </Container>
  );
};
