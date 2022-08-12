const endpoint = 'http://localhost:8000/graphql/';
const QUERY = `
  {
    getData {
      name
      uv
      pv
      amt
    }
  }
`;
import { useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';



export const Dashboard = () => {
  const [data, setData] = useState([]);
  fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: QUERY })
  })
    .then(res => res.json())
    .then(res => {
      console.log(res.data.getData);
      setData(res.data.getData);
    });
  return (
    <div>
      Dashboard
      <LineChart width={600} height={300} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
    </div>);
};
