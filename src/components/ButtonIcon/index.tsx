import { TouchableOpacityProps } from "react-native-gesture-handler";
import { Container, variantIconType } from "./styles";
import { ReactElement } from "react";

type Props = TouchableOpacityProps & {
  icon: ReactElement;
  variant?: variantIconType;
};

export const ButtonIcon = ({ icon, variant = "text", ...rest }: Props) => {
  return (
    <Container {...rest} variant={variant}>
      {icon}
    </Container>
  );
};
