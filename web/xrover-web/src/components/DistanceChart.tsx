import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const DistanceChart = ({ data }) => {
  return (
    <div>
      <h2>Distance Over Time</h2>
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="timestamp" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="distance" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default DistanceChart;