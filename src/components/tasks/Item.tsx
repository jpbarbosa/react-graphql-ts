import React from 'react';
import { TaskForm } from './Form';
import { Task } from '../../types/tasks';
import { useActiveTask } from '../../contexts/ActiveTask';

interface IProps {
  task: Task;
}

export const TaskItem: React.FC<IProps> = ({ task }) => {
  const { activeTask, setActiveTask } = useActiveTask();

  const handleUpdateTask = (task: Task) => {
    //updateTask({ variables: task });
    setActiveTask();
  };

  return (
    <>
      {activeTask && activeTask.id === task.id ? (
        <TaskForm activeTask={activeTask} handleAction={handleUpdateTask} />
      ) : (
        <div className="item">
          <span onClick={() => setActiveTask(task)}>{task.name}</span>
        </div>
      )}
    </>
  );
};
