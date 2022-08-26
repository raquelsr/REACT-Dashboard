import { gql } from '@apollo/client';

export const GET_DATA = gql`
  query GetData {
    getData {
      name
      uv
      pv
      amt
    }
  }
`;