import { data, users } from './mockData';
import { Data, User } from './types';

const getData = (): Data[] => data;
const getUserById = (args: { id: number }): User | undefined =>
    users.find(u => u.id === args.id);

const getUsers = (): User[] => users;

// const createUser = (args: { input: UserInput }): User => {
//     const user = {
//         id: users.length + 1,
//         ...args.input,
//     };
//     users.push(user);

//     return user;
// };

// const updateUser = (args: { user: User }): User => {
//     const index = users.findIndex(u => u.id === args.user.id);
//     const targetUser = users[index];

//     if (targetUser) users[index] = args.user;

//     return targetUser;
// };

export const root = {
    getData,
    getUserById,
    getUsers,
    // createUser,
    // updateUser,
};