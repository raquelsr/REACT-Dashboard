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
        isInvited
        isRegistered
    }
  }
`;

export const GET_REGISTERED_USERS_STATISTICS = gql`
  query GetRegisteredUsersStatistics {
    getRegisteredUsersStatistics {
      average
      totalRegisteredUsers
      totalInvitations
    }
  }
`;

export const GET_TOTAL_USERS_BY_COUNTRY = gql`
  query GetTotalUsersByCountry {
    getTotalUsersByCountry {
      country
      totalCount
      percentage
    }
  }
`;


export const GET_TOTAL_USERS_BY_JOB_POSITION = gql`
  query GetTotalUsersByJobPosition {
    getTotalUsersByJobPosition {
      jobPosition
      totalCount
      percentage
    }
  }
`;