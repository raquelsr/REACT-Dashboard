import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query GetUsers {
    getUsers {
        country
        email
        id
        isInvited
        isRegistered
        jobPosition
        lastName
        name
    }
  }
`;