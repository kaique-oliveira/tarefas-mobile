import { useEffect, useState } from "react";
import { Input } from "../Input";
import { Container, Title, WrapperButtons, WrapperContent } from "./styles";
import { Button } from "../Button";
import { typeTask } from "../../storage/DTO";
import { Alert } from "react-native";
import { useChangeTheme } from "../../hooks/ChangeTheme";

type Props = {
  onCloseModal(value: boolean): void;
  onSaveNewTask(task: typeTask): void;
};

export const FormNewTask = ({ onCloseModal, onSaveNewTask }: Props) => {
  const { getTheme } = useChangeTheme();

  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");

  function save() {
    if (titulo && descricao) {
      onSaveNewTask({ titulo, descricao } as typeTask);
    } else {
      Alert.alert("Atenção", "O titulo e descrição são obrigatórios!");
    }
  }

  return (
    <Container>
      <WrapperContent typeTheme={getTheme}>
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
          <Button title="Salvar" onPress={save} />
        </WrapperButtons>
      </WrapperContent>
    </Container>
  );
};
