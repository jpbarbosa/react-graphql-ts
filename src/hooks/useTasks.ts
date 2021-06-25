import { useMutation } from '@apollo/client';
import { TaskData } from '../types/tasks';
import { GET_TASKS, CREATE_TASK, UPDATE_TASK } from '../queries/tasks';

export const useTasks = () => {
  const options = {
    refetchQueries: [{ query: GET_TASKS }],
  };

  const [createTask] = useMutation<TaskData>(CREATE_TASK, options);
  const [updateTask] = useMutation<TaskData>(UPDATE_TASK, options);

  return { createTask, updateTask };
};
