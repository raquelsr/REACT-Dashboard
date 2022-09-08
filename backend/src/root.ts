import { countries, data, users } from './mockData';
import { Data, getRegisteredUsersStatisticsPayload, getTotalUsersByCountryPayload, User } from './types';

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

const getTotalUsersByCountry = (): getTotalUsersByCountryPayload[] => {
    const result: getTotalUsersByCountryPayload[] = [];
    Object.values(countries).map(country => {
        const totalCount = users.filter(user => user.country === country).length;
        const percentage = parseFloat((totalCount * 100 / users.length).toFixed(2));
        result.push({
            country,
            percentage,
            totalCount,
        });
    });
    return result;
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
    getTotalUsersByCountry,
    getUserById,
    getUsers,
    // createUser,
    // updateUser,
};