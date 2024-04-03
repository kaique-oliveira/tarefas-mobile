import AsyncStorage from "@react-native-async-storage/async-storage";
import { typeTask } from "../DTO";
import { getAllTasks } from "./getAllTasks";
import { TASK_COLLECTION } from "./storageConfig";

export async function removeTask(removedTask: typeTask) {
  try {
    const storageTasks = await getAllTasks();

    const newTasks = storageTasks.filter((task) => task.id !== removedTask.id);

    await AsyncStorage.setItem(TASK_COLLECTION, JSON.stringify(newTasks));
  } catch (error) {
    throw error;
  }
}
