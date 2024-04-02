import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";

export const Container = styled(TouchableOpacity)`
  width: 60px;
  height: 34px;

  flex-direction: row;
  padding: 2px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.COLORS.NEUTRAL_100};
`;

export const Circle = styled(Animatable.View)`
  width: 30px;
  height: 30px;

  justify-content: center;
  align-items: center;

  border-radius: 50%;
  background-color: yellow;
  transition: all 0.3s;
`;
