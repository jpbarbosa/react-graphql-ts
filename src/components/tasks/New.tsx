import React from 'react';
import { TaskForm } from './Form';
import { Task } from '../../types/tasks';
import { useActiveTask } from '../../contexts/ActiveTask';
import { useTasks } from '../../hooks/useTasks';

export const TaskNew: React.FC = () => {
  const { activeTask, setActiveTask } = useActiveTask();
  const { createTask } = useTasks();

  const handleCreateTask = (task: Task) => {
    createTask({ variables: task });
    setActiveTask();
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
