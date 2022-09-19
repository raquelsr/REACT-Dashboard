import { useQuery } from '@apollo/client';
import { BarChart } from '../components/BarChart';
import { LineChart } from '../components/LineChart';
import { PieChart } from '../components/PieChart';
import { RadarChart } from '../components/RadarChart';
import { SectionTitle } from '../components/SectionTitle';
import { Summary } from './Summary';
import { Table } from '../components/Table';
import { GET_TOTAL_USERS_BY_COUNTRY, GET_TOTAL_USERS_BY_JOB_POSITION } from '../queries/user';

export const Dashboard = () => {
  const { loading: loadingUsersByCountry, error: errorUsersByCountry, data: totalUsersByCountry } = useQuery(GET_TOTAL_USERS_BY_COUNTRY);
  const { loading: loadingUsersByJobPosition, error: errorUsersByJobPosition, data: totalUsersByJobPosition } = useQuery(GET_TOTAL_USERS_BY_JOB_POSITION);

  if (loadingUsersByCountry && loadingUsersByJobPosition) return <p>Loading...</p>;
  if (errorUsersByCountry || errorUsersByJobPosition) return <p>Upps...There is an error. :( </p>;

  return (
    <div>
      <SectionTitle title='Summary'></SectionTitle>
      <Summary />
      <Table />
      <SectionTitle title='Charts'></SectionTitle>
      <div className='flex justify-center mb-24'>
        <BarChart data={totalUsersByCountry.getTotalUsersByCountry} dataKey='totalCount' xAxisKeys='country' layout='horizontal'></BarChart>
        <PieChart data={totalUsersByCountry.getTotalUsersByCountry} dataKey='percentage' nameKey='country'></PieChart>
      </div>
      <div className='flex justify-center'>
        <LineChart data={totalUsersByJobPosition.getTotalUsersByJobPosition} dataKey='totalCount' xAxisKeys='jobPosition'></LineChart>
      </div>
      <div className='flex justify-center mt-12'>
        <RadarChart data={totalUsersByJobPosition.getTotalUsersByJobPosition}></RadarChart>
      </div>
    </div>);
};

