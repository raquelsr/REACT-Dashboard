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
    DESIGNER: 'Designer',
    BACKEND: 'Backend Developer',
    FRONTEND: 'Frontend Developer',
    MANAGER: 'Manager',
    TEAM_LEAD: 'Team Lead',
    TESTER: 'Tester',
});

export const users: User[] = [
    {
        country: Countries.BELGIUM,
        email: 'willi@mt.com',
        id: 1,
        isInvited: true,
        isRegistered: true,
        jobPosition: [JobPosition.CTO],
        lastName: 'Van Boven',
        name: 'Willi',
    },
    {
        country: Countries.BELGIUM,
        email: 'kristof@mt.com',
        id: 2,
        isInvited: true,
        isRegistered: true,
        jobPosition: [JobPosition.PRODUCT_OWNER],
        lastName: 'Verheecke',
        name: 'Kristof',
    },
    {
        country: Countries.PORTUGAL,
        email: 'rui@mt.com',
        id: 3,
        isInvited: true,
        isRegistered: true,
        jobPosition: [JobPosition.MANAGER, JobPosition.TEAM_LEAD],
        lastName: 'Oliveira',
        name: 'Rui',
    },
    {
        country: Countries.PORTUGAL,
        email: 'bruno@mt.com',
        id: 4,
        isInvited: true,
        isRegistered: true,
        jobPosition: [JobPosition.TEAM_LEAD, JobPosition.FRONTEND],
        lastName: 'Fernandes',
        name: 'Bruno',
    },
    {
        country: Countries.PORTUGAL,
        email: 'celso@nt.com',
        id: 5,
        isInvited: true,
        isRegistered: false,
        jobPosition: [JobPosition.TEAM_LEAD, JobPosition.BACKEND],
        lastName: 'Neto',
        name: 'Celso',
    },
    {
        country: Countries.PORTUGAL,
        email: 'tiago@mt.com',
        id: 6,
        isInvited: true,
        isRegistered: false,
        jobPosition: [JobPosition.FRONTEND, JobPosition.BACKEND],
        lastName: 'Ferreira',
        name: 'Tiago',
    },
    {
        country: Countries.PORTUGAL,
        email: 'ederson@mt.com',
        id: 7,
        isInvited: true,
        isRegistered: false,
        jobPosition: [JobPosition.BACKEND],
        lastName: 'da Silva',
        name: 'Ederson Angerlo',
    },
    {
        country: Countries.NIGERIA,
        email: 'joseph@mt.com',
        id: 8,
        isInvited: true,
        isRegistered: false,
        jobPosition: [JobPosition.BACKEND],
        lastName: 'Utulu',
        name: 'Joseph',
    },
    {
        country: Countries.PORTUGAL,
        email: 'pedro@mt.com',
        id: 9,
        isInvited: true,
        isRegistered: true,
        jobPosition: [JobPosition.BACKEND],
        lastName: 'Vaz Trindade',
        name: 'Pedro Miguel',
    },
    {
        country: Countries.SPAIN,
        email: 'raquel@mt.com',
        id: 10,
        isInvited: true,
        isRegistered: false,
        jobPosition: [JobPosition.FRONTEND],
        lastName: 'Serrano',
        name: 'Raquel',
    },
    {
        country: Countries.PORTUGAL,
        email: 'mariana@mt.com',
        id: 11,
        isInvited: true,
        isRegistered: true,
        jobPosition: [JobPosition.FRONTEND],
        lastName: 'Cristiano',
        name: 'Mariana',
    },
    {
        country: Countries.NIGERIA,
        email: 'jeff@mt.com',
        id: 12,
        isInvited: true,
        isRegistered: true,
        jobPosition: [JobPosition.FRONTEND],
        lastName: 'Ofobrukweta',
        name: 'Jeff',
    },
    {
        country: Countries.NIGERIA,
        email: 'excelence@mt.com',
        id: 13,
        isInvited: true,
        isRegistered: false,
        jobPosition: [JobPosition.FRONTEND],
        lastName: 'Oyeniran',
        name: 'Excelence',
    },
    {
        country: Countries.NIGERIA,
        email: 'ejiro@mt.com',
        id: 14,
        isInvited: true,
        isRegistered: false,
        jobPosition: [JobPosition.FRONTEND],
        lastName: 'Ogidigbo',
        name: 'Ejiro',
    },
    {
        country: Countries.PORTUGAL,
        email: 'ines@mt.com',
        id: 15,
        isInvited: true,
        isRegistered: true,
        jobPosition: [JobPosition.DESIGNER],
        lastName: 'Sá',
        name: 'Inês',
    },
    {
        country: Countries.BELGIUM,
        email: 'michael@mt.com',
        id: 16,
        isInvited: true,
        isRegistered: true,
        jobPosition: [JobPosition.TESTER],
        lastName: 'Rollé',
        name: 'Michael',
    },
    {
        country: Countries.BELGIUM,
        email: 'toon@mt.com',
        id: 17,
        isInvited: true,
        isRegistered: true,
        jobPosition: [JobPosition.TESTER],
        lastName: 'Van den Eyden',
        name: 'Toon',
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