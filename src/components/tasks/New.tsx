import React from 'react';
import { useMutation } from '@apollo/client';
import { TaskForm } from './Form';
import { Task, TaskData } from '../../types/tasks';
import { GET_TASKS, CREATE_TASK } from '../../queries/tasks';

export const TaskNew: React.FC = () => {
  const [createTask] = useMutation<TaskData>(CREATE_TASK, {
    refetchQueries: [{ query: GET_TASKS }],
  });

  const handleCreateTask = (task: Task) => {
    createTask({ variables: task });
  };

  return (
    <div className="new">
      <TaskForm handleAction={handleCreateTask} />
    </div>
  );
};
