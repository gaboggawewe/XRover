'use client';

import { useEffect, useState } from 'react';
import PressureChartLarge from '../../../components/PressureChartLarge';

export default function PressurePage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/pressure-data');
      const result = await response.json();
      setData(result);
    }

    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Pressure Sensor Data</h1>
      <div className="w-full h-screen">
        <PressureChartLarge data={data} />
      </div>
    </div>
  );
}