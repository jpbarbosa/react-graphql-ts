import React from 'react';
import { Header } from './Header';
import { TaskNew } from './tasks/New';
import { TaskList } from './tasks/List';
import { ActiveTaskStore } from '../contexts/ActiveTask';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <ActiveTaskStore>
          <TaskNew />
          <TaskList />
        </ActiveTaskStore>
      </div>
    </div>
  );
};
