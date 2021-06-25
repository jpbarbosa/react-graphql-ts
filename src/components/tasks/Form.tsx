import React from 'react';
import { useForm } from '../../hooks/useForm';
import { Task } from '../../types/tasks';

interface IProps {
  activeTask: Task;
  handleAction: Function;
}

export const TaskForm: React.FC<IProps> = ({ activeTask, handleAction }) => {
  const { handleChange, handleSubmit, formState } = useForm<Task>(
    activeTask,
    handleAction
  );

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formState.name}
        onChange={handleChange}
        placeholder="Task description"
      />
      <input type="submit" />
    </form>
  );
};
