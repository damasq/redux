import { Task as TaskType } from "../../types";

type Props = {
  task: TaskType;
};

export const Task = (props: Props) => {
  const { task } = props;
  const { title, description } = task;

  return (
    <div>
      <span>{title}</span>
      <span>{description}</span>
    </div>
  );
};
