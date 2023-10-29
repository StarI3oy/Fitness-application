import type { NextComponentType, NextPageContext } from "next";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartData } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
    data: ChartData<"pie", number[], unknown>
}


const GraphTest: NextComponentType<NextPageContext, {}, Props> = (
    {
        data
    }
) => {
  return (
    <div className='border overflow-auto w-1/3  border-gray-400 rounded-xl flex shadow-xl'>
    <Pie data={data} updateMode={"resize"} />
    </div>
  )
}

export default GraphTest




