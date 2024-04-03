import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type variantButtonType = "outline" | "contained";

type Props = {
  variant: variantButtonType;
};

export const Container = styled(TouchableOpacity)<Props>`
  width: max-content;
  height: 48px;

  padding: 8px 16px;
  border-radius: 16px;

  justify-content: center;
  align-items: center;

  background-color: pink;
  ${({ theme, variant }) =>
    variant === "contained"
      ? css`
          background-color: ${theme.COLORS.PRIMARY};
        `
      : css`
          background-color: transparent;
          border: 1px solid ${theme.COLORS.NEGATIVE};
        `}
`;

export const Title = styled.Text<Props>`
  ${({ theme, variant }) => css`
    font-size: ${theme.FONTS_SIZE.PARAGRAPH};
    font-weight: ${theme.FONT_WEIGHT.MD};
    color: ${variant === "contained"
      ? theme.COLORS.NEUTRAL_100
      : theme.COLORS.NEGATIVE};
  `}
`;
