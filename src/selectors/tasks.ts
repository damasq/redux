import { selectAll } from "../slices/tasks";
import { AppState } from "../store";

export const selectTasks = (state: AppState) => selectAll(state.tasks);
