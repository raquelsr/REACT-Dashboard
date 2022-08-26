import { buildSchema } from 'graphql';

export const schema = buildSchema(`
    input UserInput {
        email: String!
        name: String!

    }

    type User {
        country: String!
        email: String!
        id: Int!
        isInvited: Boolean!
        isRegistered: Boolean!
        jobPosition: [String!]!
        lastName: String!
        name: String!
    }

    type Data {
        name: String!,
        uv: Int!,
        pv: Int!,
        amt: Int!
    }

    type Mutation {
        createUser(input: UserInput): User
        updateUser(id: Int!, input: UserInput): User
    }

    type Query {
        getUserById(id: Int): User
        getUsers: [User]
        getData: [Data]
    }
`);