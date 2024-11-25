import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';

const AdcChartLarge = ({ data }) => {
  return (
    <div className="w-full h-full">
    <h2>Voltage Over Time</h2>
    <ResponsiveContainer width="100%" aspect={2}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="timestamp" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="volts" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  </div>
  );
};

export default AdcChartLarge;