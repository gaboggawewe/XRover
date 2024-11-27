import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const AltitudeChartSmall = ({ data }) => {
  return (
    <div className="w-full h-full">
      <h2>Altitude Over Time</h2>
        <LineChart width={600} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="altitude" stroke="#ffc658" />
        </LineChart>
    </div>
  );
};

export default AltitudeChartSmall;