import { User } from './types';

/* eslint-disable sort-keys */
export const Countries = Object.freeze({
    BELGIUM: 'BE',
    NIGERIA: 'NG',
    PORTUGAL: 'PT',
    SPAIN: 'ES',
});

export const JobPosition = Object.freeze({
    CTO: 'CTO',
    PRODUCT_OWNER: 'Product Owner',
    DESIGN: 'Designer',
    BACKEND: 'Backend Developer',
    FRONTEND: 'Frontend Developer',
    FULLSTACK: 'Fullstack Developer',
    MANAGER: 'Manager',
    TEAM_LEAD: 'Team Lead',
    TESTER: 'Tester',
});

export const users: User[] = [
    {
        country: Countries.PORTUGAL,
        email: 'rui@mt.com',
        id: 1,
        isInvited: true,
        isRegistered: true,
        jobPosition: [JobPosition.MANAGER],
        lastName: 'Oliveira',
        name: 'Rui',
    },
    {
        country: Countries.PORTUGAL,
        email: 'bruno@mt.com',
        id: 2,
        isInvited: true,
        isRegistered: true,
        jobPosition: [JobPosition.TEAM_LEAD, JobPosition.FRONTEND],
        lastName: 'Fernandes',
        name: 'Bruno',
    },
    {
        country: Countries.PORTUGAL,
        email: 'celso@nt.com',
        id: 3,
        isInvited: true,
        isRegistered: true,
        jobPosition: [JobPosition.TEAM_LEAD, JobPosition.BACKEND],
        lastName: 'Neto',
        name: 'Celso',
    },
    {
        country: Countries.PORTUGAL,
        email: 'tiago@mt.com',
        id: 4,
        isInvited: true,
        isRegistered: false,
        jobPosition: [JobPosition.FULLSTACK],
        lastName: 'Ferreira',
        name: 'Tiago',
    },
    {
        country: Countries.PORTUGAL,
        email: 'ederson@mt.com',
        id: 5,
        isInvited: true,
        isRegistered: false,
        jobPosition: [JobPosition.BACKEND],
        lastName: 'da Silva',
        name: 'Ederson Angerlo',
    },
    {
        country: Countries.BELGIUM,
        email: 'toon@mt.com',
        id: 6,
        isInvited: true,
        isRegistered: true,
        jobPosition: [JobPosition.TESTER],
        lastName: 'Van den Eyden',
        name: 'Toon',
    },
    {
        country: Countries.SPAIN,
        email: 'raquel@mt.com',
        id: 7,
        isInvited: true,
        isRegistered: false,
        jobPosition: [JobPosition.FRONTEND],
        lastName: 'Serrano',
        name: 'Raquel',
    },
];

export const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];