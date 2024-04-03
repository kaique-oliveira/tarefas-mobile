import { useState } from "react";
import { Container, InputText, Title } from "./styles";
import { useTheme } from "styled-components";

type Props = {
  title: string;
  textValue: string;
  placeholder: string;
  onChangeTextValue(value: string): void;
};

export const Input = ({
  title,
  textValue,
  placeholder,
  onChangeTextValue,
}: Props) => {
  const [isFocused, setIsFocused] = useState(false);
  const theme = useTheme();

  return (
    <Container>
      <Title>{title}</Title>
      <InputText
        isFocused={isFocused}
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={textValue}
        onChangeText={onChangeTextValue}
        placeholderTextColor={theme.COLORS.NEUTRAL_200}
      />
    </Container>
  );
};
