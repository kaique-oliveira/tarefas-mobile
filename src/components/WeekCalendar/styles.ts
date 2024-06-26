import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(7, 1fr);
  flex-direction: row;

  gap: 16px;
`;

export const WrapperDayWeek = styled(TouchableOpacity)`
  flex: 1;

  justify-content: center;
  align-items: center;
  margin-left: -16px;
`;

export const WeekDay = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONTS_SIZE.LABEL};
    font-weight: ${theme.FONT_WEIGHT.MD};
    color: ${theme.COLORS.NEUTRAL_200};
  `}
`;

export const Day = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONTS_SIZE.SUBTITLE};
    font-weight: ${theme.FONT_WEIGHT.LG};
    color: ${theme.COLORS.NEUTRAL_300};
  `}
`;
