import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;

  flex-direction: row;
  gap: 16px;
`;

export const WrapperTimeLine = styled.View`
  height: 100%;

  justify-content: flex-start;
  align-items: center;

  gap: 8px;
`;

export const ContainerCard = styled.View`
  flex: 1;
  height: 80px;

  border-radius: 24px;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  background-color: ${({ theme }) => theme.COLORS.NEUTRAL_100};
`;

export const ContainerInfo = styled.View`
  flex: 1;

  justify-content: center;
  align-items: flex-start;
  gap: 8px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONTS_SIZE.PARAGRAPH};
    font-weight: ${theme.FONT_WEIGHT.LG};
    color: ${theme.COLORS.NEUTRAL_300};
  `}
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONTS_SIZE.PARAGRAPH};
    font-weight: ${theme.FONT_WEIGHT.MD};
    color: ${theme.COLORS.NEUTRAL_200};
  `}
`;

export const Line = styled.View`
  width: 1px;
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
`;

export const BtnToDo = styled(TouchableOpacity)``;
