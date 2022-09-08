import * as React from 'react';
import { Pie, PieChart as PieChartRechart } from 'recharts';

export type PieChartProps = {
    data: any[];
    dataKey: string;
    nameKey: string;
}

export const PieChart: React.FC<PieChartProps> = (
    { data, dataKey, nameKey }
) => {
    return (
        <PieChartRechart width={730} height={250}>
            <Pie data={data} dataKey={dataKey} nameKey={nameKey} cx="50%" cy="50%" outerRadius={50} innerRadius={30} fill="#8884d8" label />
        </PieChartRechart>
    );
};


