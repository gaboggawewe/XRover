import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const DistanceChartLarge = ({ data }) => {
  return (
    <div>
      <LineChart width={1500} height={800} data={data}>
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

export default DistanceChartLarge;