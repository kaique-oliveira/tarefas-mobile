import { ThemeProvider, useTheme } from "styled-components";
import { StatusBar } from "react-native";
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
import { useEffect, useState } from "react";
import { CardTask } from "../../components/CardTask";
import { Alert, FlatList, Modal, Text } from "react-native";
import { TaskState } from "../../components/TaskState";
import { Plus } from "phosphor-react-native";
import { ButtonIcon } from "../../components/ButtonIcon";
import { FormNewTask } from "../../components/FormNewTask";
import { typeTask } from "../../storage/DTO";
import { insertTask } from "../../storage/task/insertTask";
import { getAllTasks } from "../../storage/task/getAllTasks";
import { removeTask } from "../../storage/task/removeTask";
import { updateTask } from "../../storage/task/updateTask";
import Toast from "react-native-tiny-toast";
import { EmptyList } from "../../components/EmptyList";

export default function Home() {
  const { getTheme } = useChangeTheme();

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedStateTask, setSelectedStateTask] = useState<"todo" | "done">(
    "todo"
  );
  const [toggleModal, setToggleModal] = useState(false);
  const [tasks, setTasks] = useState<typeTask[]>([]);

  async function saveNewTask(newTask: typeTask) {
    try {
      newTask.status = false;
      newTask.data = selectedDate;

      await insertTask(newTask);

      fetchTasks();
      setToggleModal(false);

      Toast.show("Tarefa foi criada!");
    } catch (error) {
      Toast.show("Algo deu errado!");
    }
  }

  async function fetchTasks() {
    const result = await getAllTasks();

    const taskFilter = result.filter(
      (task) =>
        new Date(task.data).toLocaleDateString() ===
          selectedDate.toLocaleDateString() &&
        task.status === (selectedStateTask === "todo" ? false : true)
    );

    setTasks(taskFilter);
  }

  async function doneTask(task: typeTask) {
    try {
      task.status = !task.status;
      await updateTask(task);
      fetchTasks();

      if (task.status) {
        Toast.show("Tarefa definida como concluida!");
      } else {
        Toast.show("Tarefa definida como pendente!");
      }
    } catch (error) {
      Toast.show("Algo deu errado!");
    }
  }

  async function confirmRemoveTask(task: typeTask) {
    try {
      await removeTask(task);

      fetchTasks();

      Toast.show("Tarefa foi removida!");
    } catch (error) {
      Toast.show("Algo deu errado!");
    }
  }

  async function handleConfirmRemoveTask(task: typeTask) {
    Alert.alert("Remover", "Deseja realmente remover essa tarefa?", [
      { text: "Não", style: "cancel" },
      { text: "Sim", onPress: () => confirmRemoveTask(task) },
    ]);
  }

  useEffect(() => {
    fetchTasks();
  }, [selectedDate, selectedStateTask]);

  return (
    <ThemeProvider theme={getTheme === "dark" ? dark : light}>
      <SafeArea>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle={getTheme === "dark" ? "light-content" : "dark-content"}
        />
        <Container>
          <Modal
            animationType="slide"
            transparent={true}
            visible={toggleModal}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setToggleModal(!toggleModal);
            }}
          >
            <FormNewTask
              onCloseModal={setToggleModal}
              onSaveNewTask={saveNewTask}
            />
          </Modal>

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
                text="Pendente"
                onPress={() => setSelectedStateTask("todo")}
              />
              <TaskState
                state={selectedStateTask == "done" ? true : false}
                text="Concluido"
                onPress={() => setSelectedStateTask("done")}
              />
            </WrapperStateTask>

            <ButtonIcon
              icon={<Plus color="#f8f8f8" />}
              variant="contained"
              onPress={() => setToggleModal(true)}
            />
          </WrapperActions>

          <FlatList
            data={tasks}
            keyExtractor={(task) => task.id.toString()}
            renderItem={(task) => (
              <CardTask
                key={task.item.id.toString()}
                onToggleDoneTask={doneTask}
                onRemoveTask={handleConfirmRemoveTask}
                task={task.item}
                hasTimeLine={tasks.length - 1 === task.index ? false : true}
              />
            )}
            contentContainerStyle={
              tasks.length === 0 ? { flex: 1 } : { gap: 8 }
            }
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={<EmptyList stateTask={selectedStateTask} />}
          />
        </Container>
      </SafeArea>
    </ThemeProvider>
  );
}
