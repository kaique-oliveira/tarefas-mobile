import { ThemeProvider, useTheme } from "styled-components";
import {
  Container,
  Header,
  SafeArea,
  WrapperActions,
  WrapperStateTask,
} from "./styles";
import { useChangeTheme } from "../../hooks/ChangeTheme";
import { dark, light } from "../../theme";
import { Hightlight } from "../../components/Hightlight";
import { SwitchTheme } from "../../components/SwitchTheme";
import { WeekCalendar } from "../../components/WeekCalendar";
import { useState } from "react";
import { CardTask } from "../../components/CardTask";
import { FlatList } from "react-native";
import { TaskState } from "../../components/TaskState";
import { Plus } from "phosphor-react-native";
import { ButtonIcon } from "../../components/ButtonIcon";

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const Home = () => {
  const { getTheme } = useChangeTheme();

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedStateTask, setSelectedStateTask] = useState<"todo" | "done">(
    "todo"
  );

  return (
    <ThemeProvider theme={getTheme === "dark" ? dark : light}>
      <SafeArea>
        <Container>
          <Header>
            <Hightlight />

            <SwitchTheme />
          </Header>

          <WeekCalendar
            selectedDate={selectedDate}
            onChangeDateSelected={setSelectedDate}
          />

          <WrapperActions>
            <WrapperStateTask>
              <TaskState
                state={selectedStateTask == "todo" ? true : false}
                text="A fazer"
                onPress={() => setSelectedStateTask("todo")}
              />
              <TaskState
                state={selectedStateTask == "done" ? true : false}
                text="Concluido"
                onPress={() => setSelectedStateTask("done")}
              />
            </WrapperStateTask>

            <ButtonIcon icon={<Plus color="#f8f8f8" />} variant="contained" />
          </WrapperActions>

          <FlatList
            data={arr}
            keyExtractor={(item) => item.toString()}
            renderItem={({ item }) => (
              <CardTask
                key={item.toString()}
                isDone={selectedStateTask === "done" ? true : false}
                hasTimeLine={arr[arr.length - 1] === item ? false : true}
              />
            )}
            contentContainerStyle={{ gap: 8 }}
            showsVerticalScrollIndicator={false}
          />
        </Container>
      </SafeArea>
    </ThemeProvider>
  );
};
