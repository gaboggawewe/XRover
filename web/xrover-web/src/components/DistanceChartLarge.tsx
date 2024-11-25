import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DistanceChartLarge = ({ data }) => {
  return (
    <div className="w-full h-full">
      <h2>Acceleration Over Time</h2>
      <ResponsiveContainer width="100%" aspect={2}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="distance" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DistanceChartLarge;