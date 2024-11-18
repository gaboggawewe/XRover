import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const PressureChart = ({ data }) => {
  return (
    <div>
      <h2>Pressure, Temperature, and Altitude Over Time</h2>
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="timestamp" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
        <Line type="monotone" dataKey="pressure" stroke="#82ca9d" />
        <Line type="monotone" dataKey="altitude" stroke="#ffc658" />
      </LineChart>

    </div>
  );
};

export default PressureChart;