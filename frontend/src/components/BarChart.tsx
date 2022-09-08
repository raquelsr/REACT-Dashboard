import * as React from 'react';
import { BarChart as BarChartRechart, Bar, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import { LayoutType } from 'recharts/types/util/types';

export type BarChartProps = {
    data: any[];
    dataKey: string;
    xAxisKeys?: string;
    yAxisKeys?: string;
    layout: LayoutType;
}

export const BarChart: React.FC<BarChartProps> = (
    { data, dataKey, xAxisKeys, yAxisKeys, layout }
) => {
    return (
        <BarChartRechart width={730} height={250} data={data} layout={layout}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={xAxisKeys} />
            <YAxis dataKey={yAxisKeys} />
            <Tooltip />
            <Legend />
            <Bar dataKey={dataKey} fill="#82ca9d" />
        </BarChartRechart>
    );
};


