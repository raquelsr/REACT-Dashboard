import { useQuery } from '@apollo/client';
import { BarChart } from '../components/BarChart';
import { LineChart } from '../components/LineChart';
import { PieChart } from '../components/PieChart';
import { Summary } from '../components/Summary';
import { Table } from '../components/Table';
// import { GET_DATA } from '../queries/data';
import { GET_TOTAL_USERS_BY_COUNTRY, GET_TOTAL_USERS_BY_JOB_POSITION, GET_USERS } from '../queries/user';

export const Dashboard = () => {
  // const { loading, error, data } = useQuery(GET_DATA);
  const { loading: loadingUsers, error: errorUsers, data: dataUsers } = useQuery(GET_USERS);
  const { loading: loadingUsers2, error: errorUsers2, data: totalUsers } = useQuery(GET_TOTAL_USERS_BY_COUNTRY);
  const { loading: loadingUsers3, error: errorUsers3, data: totalUsers3 } = useQuery(GET_TOTAL_USERS_BY_JOB_POSITION);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Upps...There is an error. :( </p>;
  if (loadingUsers) return <p>Loading...</p>;
  if (errorUsers) return <p>Upps...There is an error. :( </p>;
  if (loadingUsers2) return <p>Loading...</p>;
  if (errorUsers2) return <p>Upps...There is an error. :( </p>;
  if (loadingUsers3) return <p>Loading...</p>;
  if (errorUsers3) return <p>Upps...There is an error. :( </p>;



  return (
    <div>
      <Summary />
      <Table />
      <div>
        <BarChart data={totalUsers.getTotalUsersByCountry} dataKey='totalCount' xAxisKeys='country' layout='horizontal'></BarChart>
        <PieChart data={totalUsers.getTotalUsersByCountry} dataKey='percentage' nameKey='name'></PieChart>
      </div>
      <div>
        <LineChart data={totalUsers3.getTotalUsersByJobPosition} dataKey='totalCount' xAxisKeys='jobPosition'></LineChart>
        <LineChart data={dataUsers.getUsers} dataKey='id' xAxisKeys='id'></LineChart>
      </div>


      <PieChart data={dataUsers.getUsers} dataKey='id' nameKey='name'></PieChart>
    </div>);
};

