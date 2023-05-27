import "./App.css";
import { Button } from "./component/Button";
import { Input } from "./component/Input";
import { useEffect, useState } from "react";
import { createTask, loadTodos } from "./slices/tasks";
import { Task } from "./component/Task";
import { selectTasks } from "./selectors/tasks";
import { useAppDispatch, useAppSelector } from "./store";

const App = () => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector(selectTasks);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    dispatch(loadTodos());
  }, []);

  const onAddClick = () => {
    if (title) {
      dispatch(
        createTask({ id: Date.now(), userId: 1, title, completed: false })
      );
    }
  };

  return (
    <div className="App">
      <Input name="title" labelText="Title" value={title} onChange={setTitle} />
      <Input
        name="description"
        labelText="Description"
        value={description}
        onChange={setDescription}
      />
      <Button onClick={onAddClick}>Add task</Button>
      {tasks.map((task) => (
        <Task task={task} />
      ))}
    </div>
  );
};

export default App;
