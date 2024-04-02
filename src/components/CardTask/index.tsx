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

type Props = {
  hasTimeLine: boolean;
  isDone?: boolean;
};

export const CardTask = ({ hasTimeLine, isDone = false }: Props) => {
  const theme = useTheme();

  return (
    <Container>
      <WrapperTimeLine>
        {isDone ? (
          <BtnToDo>
            <CheckCircle weight="fill" size={22} color={theme.COLORS.PRIMARY} />
          </BtnToDo>
        ) : (
          <BtnToDo>
            <Circle weight="bold" size={22} color={theme.COLORS.PRIMARY} />
          </BtnToDo>
        )}
        {hasTimeLine && <Line />}
      </WrapperTimeLine>

      <ContainerCard>
        <ContainerInfo>
          <Title>Titulo</Title>
          <SubTitle>Descricao</SubTitle>
        </ContainerInfo>

        <ButtonIcon
          icon={<TrashSimple color={theme.COLORS.NEGATIVE} size={20} />}
        />
      </ContainerCard>
    </Container>
  );
};
