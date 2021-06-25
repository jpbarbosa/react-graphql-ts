import React, { useRef } from 'react';
import { useForm } from '../../hooks/useForm';
import { Task } from '../../types/tasks';

interface IProps {
  activeTask: Task;
  handleAction: Function;
}

export const TaskForm: React.FC<IProps> = ({ activeTask, handleAction }) => {
  const focus = useRef<HTMLInputElement>(null);
  const { handleChange, handleSubmit, formState } = useForm<Task>(
    activeTask,
    handleAction,
    focus
  );

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formState.name}
        onChange={handleChange}
        placeholder="Task description"
        ref={focus}
      />
      <input type="submit" />
    </form>
  );
};
