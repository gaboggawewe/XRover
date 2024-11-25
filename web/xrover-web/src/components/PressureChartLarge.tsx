import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PressureChartLarge = ({ data }) => {
  return (
    <div className="w-full h-full">
      <h2>Pressure, Temperature, and Altitude Over Time</h2>
      <ResponsiveContainer width="100%" aspect={2}>
      <LineChart  data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="timestamp" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
        <Line type="monotone" dataKey="pressure" stroke="#82ca9d" />
        <Line type="monotone" dataKey="altitude" stroke="#ffc658" />
      </LineChart>  
      </ResponsiveContainer>
    </div>
  );
};

export default PressureChartLarge;