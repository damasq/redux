import {
  createSlice,
  CaseReducer,
  PayloadAction,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { Task } from "../types";

type TasksState = {
  ids: number[];
  entities: {
    [key in number]: Task;
  };
};

type Reducers = {
  createTask: CaseReducer<TasksState, PayloadAction<Task>>;
};

export const loadTodos = createAsyncThunk<Task[]>(
  "posts",
  async (_, thunkApi) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      const json = await response.json();
      return thunkApi.fulfillWithValue(json);
    } catch (json_1) {
      return thunkApi.rejectWithValue(json_1);
    }
  }
);

export const tasksSlice = createSlice<TasksState, Reducers>({
  name: "tasks",
  initialState: {
    ids: [],
    entities: {},
  },
  reducers: {
    createTask: (state, { payload }) => {
      state.ids.push(payload.id);
      state.entities[payload.id] = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadTodos.pending, (state, action) => {});
  },
});

export const tasksReducer = tasksSlice.reducer;

export const { createTask } = tasksSlice.actions;

export const { selectAll } = {
  selectAll: (state: TasksState) => state.ids.map((id) => state.entities[id]),
};
