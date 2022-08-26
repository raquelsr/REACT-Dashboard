import * as React from 'react';
import { BarChart as BarChartRechart, Bar, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import { LayoutType } from 'recharts/types/util/types';

export type BarChartProps = {
    data: any[];
    xAxisKeys: string;
    layout: LayoutType;
}

export const BarChart: React.FC<BarChartProps> = (
    { data, xAxisKeys, layout }
) => {
    return (
        <BarChartRechart width={730} height={250} data={data} layout={layout}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis />
            <YAxis dataKey={xAxisKeys} />
            <Tooltip />
            <Legend />
            <Bar dataKey="id" fill="#82ca9d" />
        </BarChartRechart>
    );
};


