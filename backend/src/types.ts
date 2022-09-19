
export type User = {
    country: string;
    email: string;
    id: number;
    isInvited: boolean;
    isRegistered: boolean;
    jobPosition: string[];
    lastName: string;
    name: string;
}

export type getRegisteredUsersStatisticsPayload = {
    average: number;
    totalInvitations: number;
    totalRegisteredUsers: number;
}

export type getTotalUsersByCountryPayload = {
    country: string;
    totalCount: number;
    percentage: number;
}

export type getTotalUsersByJobPositionPayload = {
    jobPosition: string;
    totalCount: number;
    percentage: number;
}

// export type UserInput = Pick<User, "email" | "name">
