import { gql } from '@apollo/client';

export const GET_TASKS = gql`
  {
    tasks {
      id
      name
    }
  }
`;

export const CREATE_TASK = gql`
  mutation ($name: String!) {
    createTask(name: $name) {
      id
      name
    }
  }
`;

export const UPDATE_TASK = gql`
  mutation ($id: ID!, $name: String!) {
    updateTask(id: $id, name: $name) {
      id
      name
    }
  }
`;

export const REMOVE_TASK = gql`
  mutation ($id: ID!) {
    removeTask(id: $id)
  }
`;
