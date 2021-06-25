import React from 'react';
import { useMutation } from '@apollo/client';
import { TaskForm } from './Form';
import { Task, TaskData } from '../../types/tasks';
import { useActiveTask } from '../../contexts/ActiveTask';
import { GET_TASKS, CREATE_TASK } from '../../queries/tasks';

export const TaskNew: React.FC = () => {
  const { activeTask, setActiveTask } = useActiveTask();

  const [createTask] = useMutation<TaskData>(CREATE_TASK, {
    refetchQueries: [{ query: GET_TASKS }],
  });

  const handleCreateTask = (task: Task) => {
    createTask({ variables: task });
  };

  return (
    <div className="new">
      {activeTask && activeTask.id === undefined ? (
        <TaskForm handleAction={handleCreateTask} activeTask={activeTask} />
      ) : (
        <button className="bt-new" onClick={() => setActiveTask({ name: '' })}>
          New Task
        </button>
      )}
    </div>
  );
};
