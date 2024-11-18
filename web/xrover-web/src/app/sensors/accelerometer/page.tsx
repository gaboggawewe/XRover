'use client';

import { useEffect, useState } from 'react';
import AccelerometerChart from '../../../components/AccelerometerChart';

export default function AccelerometerPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/accelerometer-data');
      const result = await response.json();
      setData(result);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Accelerometer Data</h1>
      <AccelerometerChart data={data} />
    </div>
  );
}