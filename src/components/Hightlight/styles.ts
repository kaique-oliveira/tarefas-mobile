import { css } from "styled-components";
import styled from "styled-components/native";

export const Container = styled.View``;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONTS_SIZE.TITLE};
    font-weight: ${theme.FONT_WEIGHT.LG};
    color: ${theme.COLORS.NEUTRAL_300};
  `}
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONTS_SIZE.SUBTITLE};
    font-weight: ${theme.FONT_WEIGHT.MD};
    color: ${theme.COLORS.NEUTRAL_200};
  `}
`;
