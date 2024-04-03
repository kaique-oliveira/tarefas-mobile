import AsyncStorage from "@react-native-async-storage/async-storage";
import { typeTask } from "../DTO";
import { getAllTasks } from "./getAllTasks";
import { TASK_COLLECTION } from "./storageConfig";

export async function insertTask(newTask: typeTask) {
  try {
    const storageTasks = await getAllTasks();

    await AsyncStorage.setItem(
      TASK_COLLECTION,
      JSON.stringify([...storageTasks, newTask])
    );
  } catch (error) {
    throw error;
  }
}
