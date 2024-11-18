'use client';

import { useEffect, useState } from 'react';
import SensorChart from '../../../components/SensorChart';

export default function DistancePage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/distance-data');
      if (response.ok) {
        const result = await response.json();
        const formattedData = result.map((row: any) => ({
          name: row.time,
          value: row.distance,
        }));
        setData(formattedData);
      } else {
        console.error('Failed to fetch data');
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Distance Sensor Data</h1>
      <SensorChart data={data} />
    </div>
  );
}