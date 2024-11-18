import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const AccelerometerChartSmall = ({ data }) => {
  return (
    <div>
      <h2>Acceleration Over Time</h2>
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="timestamp" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="acceleration_x" stroke="#8884d8" />
        <Line type="monotone" dataKey="acceleration_y" stroke="#82ca9d" />
        <Line type="monotone" dataKey="acceleration_z" stroke="#ffc658" />
      </LineChart>
    </div>
  );
};

export default AccelerometerChartSmall;