'use client';

import { useEffect, useState } from 'react';
import DistanceChartLarge from '../../../components/DistanceChartLarge';

export default function DistancePage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/distance-data');
      const result = await response.json();
      setData(result);
    }

    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Distance Sensor Data</h1>
      <div className="w-full h-screen">
        <DistanceChartLarge data={data} />
      </div>
    </div>
  );
}