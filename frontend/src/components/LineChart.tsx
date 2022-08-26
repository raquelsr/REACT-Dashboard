import * as React from 'react';
import { LineChart as LineChartRechart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { LineChart as Props } from '../types/Data.types';

export const LineChart: React.FC<Props> = (
  { data }
) => {
  return (
    <LineChartRechart width={600} height={300} data={data}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
    </LineChartRechart>
  );
};


