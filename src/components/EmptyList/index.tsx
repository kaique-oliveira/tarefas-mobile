import { NoteBlank } from "phosphor-react-native";
import { Container, Subtitle, Title } from "./styles";
import { useChangeTheme } from "../../hooks/ChangeTheme";
import { useTheme } from "styled-components";

type Props = {
  stateTask: "todo" | "done";
};

export const EmptyList = ({ stateTask }: Props) => {
  const { getTheme } = useChangeTheme();
  const theme = useTheme();

  return (
    <Container>
      <NoteBlank size={56} weight="regular" color={theme.COLORS.NEUTRAL_200} />
      <Title>
        {stateTask === "done"
          ? "Sem tarefas concluidas"
          : "Sem tarefas pendentes"}
      </Title>
      <Subtitle>Crie novas tarefas, e organize sua semana!</Subtitle>
    </Container>
  );
};
