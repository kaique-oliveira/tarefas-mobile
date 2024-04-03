import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type variantTypeTaskState = "neutral" | "active";

type Props = {
  variant: variantTypeTaskState;
};

export const Container = styled(TouchableOpacity)<Props>`
  max-width: max-content;
  height: 48px;

  padding: 8px 16px;
  border-radius: 50%;

  justify-content: center;
  align-items: center;
  flex-direction: row;

  gap: 8px;

  ${({ variant, theme }) =>
    variant === "neutral"
      ? css`
          background-color: ${theme.COLORS.NEUTRAL_100};
        `
      : css`
          background-color: ${theme.COLORS.SECONDARY};
        `}
`;

export const Title = styled.Text<Props>`
  ${({ theme, variant }) => css`
    font-size: ${theme.FONTS_SIZE.PARAGRAPH};
    font-weight: ${theme.FONT_WEIGHT.LG};
    color: ${variant === "neutral" ? theme.COLORS.NEUTRAL_200 : "white"};
  `}
`;
