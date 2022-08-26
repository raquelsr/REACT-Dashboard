import { useQuery } from '@apollo/client';
import { BarChart } from '../components/BarChart';
import { LineChart } from '../components/LineChart';
import { PieChart } from '../components/PieChart';
import { GET_DATA } from '../queries/data';
import { GET_USERS } from '../queries/user';

export const Dashboard = () => {
  const { loading, error, data } = useQuery(GET_DATA);
  const { loading: loadingUsers, error: errorUsers, data: dataUsers } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Upps...There is an error. :( </p>;
  if (loadingUsers) return <p>Loading...</p>;
  if (errorUsers) return <p>Upps...There is an error. :( </p>;

  return (
    <div>
      <LineChart data={data.getData} dataKey='uv' xAxisKeys='name'></LineChart>
      <LineChart data={dataUsers.getUsers} dataKey='id' xAxisKeys='id'></LineChart>
      <BarChart data={dataUsers.getUsers} xAxisKeys='id' layout='horizontal'></BarChart>
      <BarChart data={dataUsers.getUsers} xAxisKeys='id' layout='vertical'></BarChart>
      <PieChart data={dataUsers.getUsers} dataKey='id' nameKey='name'></PieChart>
    </div>);
};

