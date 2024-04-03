import { useEffect, useState } from "react";
import { Input } from "../Input";
import { Container, Title, WrapperButtons, WrapperContent } from "./styles";
import { Button } from "../Button";

type Props = {
  onCloseModal(value: boolean): void;
};

export const FormNewTask = ({ onCloseModal }: Props) => {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");

  return (
    <Container>
      <WrapperContent>
        <Title>Nova tarefa</Title>
        <Input
          title="Titulo"
          textValue={titulo}
          placeholder="Ex.: Estudos"
          onChangeTextValue={setTitulo}
        />

        <Input
          title="Descrição"
          textValue={descricao}
          placeholder="Ex.: Estudar Português"
          onChangeTextValue={setDescricao}
        />

        <WrapperButtons>
          <Button
            variant="outline"
            title="Cancelar"
            onPress={() => onCloseModal(false)}
          />
          <Button title="Salvar" />
        </WrapperButtons>
      </WrapperContent>
    </Container>
  );
};
