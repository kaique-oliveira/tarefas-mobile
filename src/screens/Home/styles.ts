import { SafeAreaView } from "react-native";
import styled from "styled-components/native";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.DEFAULT};
`;

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.DEFAULT};
  padding: 16px;
  gap: 24px;
`;

export const Header = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
`;
