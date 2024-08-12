/* eslint-disable react/prop-types */
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import "./chart.css";

export const Chart = ({ title, data, dataKey, grid }) => {
 
  return (
    <div className="chart">
      <h3 className="chartTitle">{ title }</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="purple" />
          <Line type="monotone" dataKey={dataKey} stroke="purple" />
          <Tooltip />
          {grid && <CartesianGrid strokeDasharray="5 5" stroke="#e0dfdf" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
export default Chart;
