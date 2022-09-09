import { useQuery } from '@apollo/client';
import { BarChart } from '../components/BarChart';
import { LineChart } from '../components/LineChart';
import { PieChart } from '../components/PieChart';
import { RadarChart } from '../components/RadarChart';
import { SectionTitle } from '../components/SectionTitle';
import { Summary } from '../components/Summary';
import { Table } from '../components/Table';
// import { GET_DATA } from '../queries/data';
import { GET_TOTAL_USERS_BY_COUNTRY, GET_TOTAL_USERS_BY_JOB_POSITION } from '../queries/user';

export const Dashboard = () => {
  // const { loading, error, data } = useQuery(GET_DATA);
  // const { loading: loadingUsers, error: errorUsers, data: dataUsers } = useQuery(GET_USERS);
  const { loading: loadingUsers2, error: errorUsers2, data: totalUsers } = useQuery(GET_TOTAL_USERS_BY_COUNTRY);
  const { loading: loadingUsers3, error: errorUsers3, data: totalUsers3 } = useQuery(GET_TOTAL_USERS_BY_JOB_POSITION);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Upps...There is an error. :( </p>;
  // if (loadingUsers) return <p>Loading...</p>;
  // if (errorUsers) return <p>Upps...There is an error. :( </p>;
  if (loadingUsers2) return <p>Loading...</p>;
  if (errorUsers2) return <p>Upps...There is an error. :( </p>;
  if (loadingUsers3) return <p>Loading...</p>;
  if (errorUsers3) return <p>Upps...There is an error. :( </p>;



  return (
    <div>
      <SectionTitle title='Summary'></SectionTitle>
      <Summary />
      <Table />
      <SectionTitle title='Charts'></SectionTitle>
      <div className='flex mb-24 w-fit'>
        <BarChart data={totalUsers.getTotalUsersByCountry} dataKey='totalCount' xAxisKeys='country' layout='horizontal'></BarChart>
        <PieChart data={totalUsers.getTotalUsersByCountry} dataKey='percentage' nameKey='country'></PieChart>
      </div>
      <div>
        <LineChart data={totalUsers3.getTotalUsersByJobPosition} dataKey='totalCount' xAxisKeys='jobPosition'></LineChart>
      </div>
      <div className='flex justify-center mt-12'>
        <RadarChart data={totalUsers3.getTotalUsersByJobPosition}></RadarChart>
      </div>
    </div>);
};

