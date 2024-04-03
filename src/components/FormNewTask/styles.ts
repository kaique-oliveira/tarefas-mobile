import styled, { css } from "styled-components/native";

type Props = {
  typeTheme: "light" | "dark";
};

export const Container = styled.View`
  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;

  background-color: none;
  padding: 16px;
`;

export const WrapperContent = styled.View<Props>`
  width: 100%;
  height: max-content;

  justify-content: flex-start;
  align-items: center;

  border-radius: 32px;
  padding: 16px;
  gap: 32px;

  background-color: ${({ theme }) => theme.COLORS.DEFAULT};
  box-shadow: 0px 0px 50px rgba(114, 114, 114, 0.36);

  ${({ typeTheme }) =>
    typeTheme === "dark"
      ? css`
          box-shadow: 0px 0px 50px rgba(0, 0, 0, 1);
        `
      : css`
          box-shadow: 0px 0px 50px rgba(114, 114, 114, 0.4);
        `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 19px;
    font-weight: ${theme.FONT_WEIGHT.LG};
    color: ${theme.COLORS.NEUTRAL_300};
  `}
`;

export const WrapperButtons = styled.View`
  width: 100%;

  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  gap: 32px;
`;
