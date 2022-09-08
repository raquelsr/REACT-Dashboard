import { useQuery } from '@apollo/client';
import { User } from '../queries/types';
import { GET_USERS } from '../queries/user';

export const Table = () => {
    const { loading, error, data } = useQuery(GET_USERS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Upps...There is an error. :( </p>;
    const users = data?.getUsers;

    return (
        <table className="table-fixed w-full m-4 border-separate border border-slate-400">
            <thead>
                <tr>
                    <th className='border border-slate-300'>First Name</th>
                    <th className='border border-slate-300'>Last name</th>
                    <th className='border border-slate-300'>Email</th>
                    <th className='border border-slate-300'>Job position</th>
                    <th className='border border-slate-300'>Country</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user: User) => {
                    return (
                        <tr key={user.id}>
                            <td className='border border-slate-300'>{user.name}</td>
                            <td className='border border-slate-300'>{user.lastName}</td>
                            <td className='border border-slate-300'>{user.email}</td>
                            <td className='border border-slate-300'>{user.jobPosition}</td>
                            <td className='border border-slate-300'>{user.country}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};


