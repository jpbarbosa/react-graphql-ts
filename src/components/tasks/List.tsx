import React from 'react';
import { useQuery } from '@apollo/client';
import { TaskItem } from './Item';
import { TaskData } from '../../types/tasks';
import { GET_TASKS } from '../../queries/tasks';

export const TaskList: React.FC = () => {
  const { loading, data, error } = useQuery<TaskData>(GET_TASKS);

  if (loading) return <div>Loading...</div>;
  if (error) {
    return (
      <div className="error">
        <div>{error.message}</div>
        <pre>{JSON.stringify(error.networkError, null, 2)}</pre>
      </div>
    );
  }

  return (
    <div className="list">
      <ul>
        {data?.tasks.map((task: any) => (
          <li key={task.id}>
            <TaskItem task={task} />
          </li>
        ))}
      </ul>
    </div>
  );
};
