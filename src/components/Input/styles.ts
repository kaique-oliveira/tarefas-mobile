import styled, { css } from "styled-components/native";

type Props = {
  isFocused: boolean;
};

export const Container = styled.View`
  width: 100%;

  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
`;

export const InputText = styled.TextInput<Props>`
  width: 100%;
  height: 54px;

  border-radius: 16px;
  background-color: ${({ theme }) => theme.COLORS.NEUTRAL_100};
  padding: 0px 16px;

  font-size: ${({ theme }) => theme.FONTS_SIZE.PARAGRAPH};
  color: ${({ theme }) => theme.COLORS.NEUTRAL_200};

  ${({ isFocused, theme }) =>
    isFocused
      ? css`
          border: 1px solid ${theme.COLORS.PRIMARY};
        `
      : css`
          border: 1px solid ${theme.COLORS.NEUTRAL_100};
        `}

  box-shadow: 0px 0px 1px rgba(114, 114, 114, 0.26);
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONTS_SIZE.LABEL};
    font-weight: ${theme.FONT_WEIGHT.LG};
    color: ${theme.COLORS.NEUTRAL_200};
  `}
`;
