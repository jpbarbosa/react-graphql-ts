import React from 'react';
import { useForm } from '../../hooks/useForm';
import { Task } from '../../types/tasks';

interface IProps {
  handleAction: Function;
}

export const TaskForm: React.FC<IProps> = ({ handleAction }) => {
  const initialState = {
    name: '',
  };
  const { handleChange, handleSubmit, formState } = useForm<Task>(
    initialState,
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
