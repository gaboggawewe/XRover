import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AccelerometerChartLarge = ({ data }) => {
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
          <Line type="monotone" dataKey="acceleration_x" stroke="#8884d8" />
          <Line type="monotone" dataKey="acceleration_y" stroke="#82ca9d" />
          <Line type="monotone" dataKey="acceleration_z" stroke="#ffc658" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AccelerometerChartLarge;