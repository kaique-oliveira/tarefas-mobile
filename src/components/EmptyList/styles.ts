import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONTS_SIZE.PARAGRAPH};
    font-weight: ${theme.FONT_WEIGHT.LG};
    color: ${theme.COLORS.NEUTRAL_300};
  `}
`;
export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONTS_SIZE.PARAGRAPH};
    font-weight: ${theme.FONT_WEIGHT.MD};
    color: ${theme.COLORS.NEUTRAL_200};
  `}
`;
