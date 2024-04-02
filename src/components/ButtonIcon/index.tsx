import { Container, variantIconType } from "./styles";
import { ReactElement } from "react";

type Props = {
  icon: ReactElement;
  variant?: variantIconType;
};

export const ButtonIcon = ({ icon, variant = "text" }: Props) => {
  return <Container variant={variant}>{icon}</Container>;
};
