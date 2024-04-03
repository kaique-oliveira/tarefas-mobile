import { useTheme } from "styled-components";
import {
  Container,
  Line,
  ContainerCard,
  WrapperTimeLine,
  ContainerInfo,
  Title,
  SubTitle,
  BtnToDo,
} from "./styles";
import { Circle, TrashSimple, CheckCircle } from "phosphor-react-native";
import { ButtonIcon } from "../ButtonIcon";
import { typeTask } from "../../storage/DTO";

type Props = {
  hasTimeLine: boolean;
  task: typeTask;
  onToggleDoneTask(task: typeTask): void;
  onRemoveTask(task: typeTask): void;
};

export const CardTask = ({
  hasTimeLine,
  task,
  onToggleDoneTask,
  onRemoveTask,
}: Props) => {
  const theme = useTheme();

  return (
    <Container>
      <WrapperTimeLine>
        {task.status ? (
          <BtnToDo onPress={() => onToggleDoneTask(task)}>
            <CheckCircle weight="fill" size={22} color={theme.COLORS.PRIMARY} />
          </BtnToDo>
        ) : (
          <BtnToDo onPress={() => onToggleDoneTask(task)}>
            <Circle weight="bold" size={22} color={theme.COLORS.PRIMARY} />
          </BtnToDo>
        )}
        {hasTimeLine && <Line />}
      </WrapperTimeLine>

      <ContainerCard>
        <ContainerInfo>
          <Title>{task.titulo}</Title>
          <SubTitle>{task.descricao}</SubTitle>
        </ContainerInfo>

        <ButtonIcon
          icon={<TrashSimple color={theme.COLORS.NEGATIVE} size={20} />}
          onPress={() => onRemoveTask(task)}
        />
      </ContainerCard>
    </Container>
  );
};
