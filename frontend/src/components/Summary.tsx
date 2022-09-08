import { useQuery } from '@apollo/client';
import { GET_REGISTERED_USERS_STATISTICS } from '../queries/user';

export const Summary = () => {
    const { loading, error, data: statisticsData } = useQuery(GET_REGISTERED_USERS_STATISTICS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Upps...There is an error. :( </p>;
    let data;
    if (statisticsData) {
        data = statisticsData.getRegisteredUsersStatistics;
    }
    return (
        <>
            <div className='grid grid-cols-4 gap-6 m-10 h-64'>
                <div className='bg-orange-400 rounded-lg'>{data.totalInvitations} Invited users</div>
                <div className="bg-lime-400 rounded-lg row-span-2">{data.average} % </div>
                <div className="bg-orange-400 rounded-lg col-span-2 row-span-2">{data.totalInvitations} active users</div>
                <div className="bg-orange-400 rounded-lg">{data.totalRegisteredUsers} registered users</div>
            </div>
        </>
    );
};


