import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type variantIconType = "text" | "contained";

type Props = {
  variant: variantIconType;
};

export const Container = styled(TouchableOpacity)<Props>`
  width: 40px;
  height: 40px;

  border-radius: 14px;
  align-items: center;
  justify-content: center;

  ${({ variant, theme }) =>
    variant === "text"
      ? css`
          background-color: transparent;
        `
      : css`
          background-color: ${theme.COLORS.PRIMARY};
        `}
`;
