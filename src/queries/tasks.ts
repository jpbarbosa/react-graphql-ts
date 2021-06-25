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
