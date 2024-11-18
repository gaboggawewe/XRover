import SensorChart from '../../components/SensorChart';

const data = [
  { name: 'Page A', value: 400 },
  { name: 'Page B', value: 300 },
  { name: 'Page C', value: 200 },
  { name: 'Page D', value: 278 },
  { name: 'Page E', value: 189 },
];

export default function PressurePage() {
  return (
    <div>
      <h1>Pressure Sensor Data</h1>
      <SensorChart data={data} />
    </div>
  );
}