import { data, users } from './mockData';
import { Data, getRegisteredUsersStatisticsPayload, User } from './types';

const getData = (): Data[] => data;
const getUserById = (args: { id: number }): User | undefined =>
    users.find(u => u.id === args.id);

const getUsers = (): User[] => users;
const getRegisteredUsersStatistics = (): getRegisteredUsersStatisticsPayload => {
    const totalInvitations = users.filter(user => user.isInvited).length;
    const totalRegisteredUsers = users.filter(user => user.isRegistered).length;
    const average = parseFloat((totalRegisteredUsers * 100 / totalInvitations).toFixed(2));
    return {
        average,
        totalInvitations,
        totalRegisteredUsers
    };
};
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
    getRegisteredUsersStatistics,
    getUserById,
    getUsers,
    // createUser,
    // updateUser,
};