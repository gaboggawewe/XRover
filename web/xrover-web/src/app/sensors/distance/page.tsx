'use client';

import { useEffect, useState } from 'react';
import DistanceChart from '../../../components/DistanceChart';

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
    <div>
      <h1 className="text-2xl font-bold mb-4">Distance Sensor Data</h1>
      <DistanceChart data={data} />
    </div>
  );
}