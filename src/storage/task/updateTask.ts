import AsyncStorage from "@react-native-async-storage/async-storage";
import { typeTask } from "../DTO";
import { getAllTasks } from "./getAllTasks";
import { TASK_COLLECTION } from "./storageConfig";

export async function updateTask(editedTask: typeTask) {
  try {
    const storageTasks = await getAllTasks();

    const filterTask = storageTasks.filter((x) => x.id !== editedTask.id);

    filterTask.push(editedTask);

    await AsyncStorage.setItem(TASK_COLLECTION, JSON.stringify(filterTask));
  } catch (error) {
    throw error;
  }
}
