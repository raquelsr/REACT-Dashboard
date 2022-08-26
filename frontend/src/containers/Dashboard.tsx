import { useQuery } from '@apollo/client';
import { LineChart } from '../components/LineChart';
import { GET_DATA } from '../queries/data';

export const Dashboard = () => {
  //const [data, setData] = useState<Data[]>([]);
  // fe1(setData);
  const { loading, error, data } = useQuery(GET_DATA);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data, 'data');
  // if (error) return <p>There is an error.</p>;
  // if (!data) return <p>Loading...</p>;
  return (
    <div>
      <LineChart data={data.getData}></LineChart>
    </div>);
};

