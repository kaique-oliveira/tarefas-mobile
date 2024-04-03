import AsyncStorage from "@react-native-async-storage/async-storage";
import { TASK_COLLECTION } from "./storageConfig";
import { typeTask } from "../DTO";

export async function getAllTasks() {
  try {
    const storage = await AsyncStorage.getItem(TASK_COLLECTION);

    const tasks: typeTask[] = storage ? JSON.parse(storage) : [];

    return tasks;
  } catch (error) {
    throw error;
  }
}
