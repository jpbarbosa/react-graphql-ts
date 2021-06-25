import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_TASKS } from '../queries/tasks';
import { TaskData } from '../types/tasks';

export const Header: React.FC = () => {
  const { data } = useQuery<TaskData>(GET_TASKS);

  return (
    <header>
      <h1>
        <div className="title">React Basic CRUD</div>
        <div className="subtitle">With GraphQL And TypeScript</div>
      </h1>
      <div className="counter">{data?.tasks.length}</div>
    </header>
  );
};
