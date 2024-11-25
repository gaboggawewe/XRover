'use client';

import { useEffect, useState } from 'react';
import AccelerometerChartLarge from '../../../components/AccelerometerChartLarge';

export default function AccelerometerPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/accelerometer-data');
        if (response.ok) {
          const result = await response.json();
          setData(result);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
    const interval = setInterval(fetchData, 1000); // Fetch data every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Accelerometer Data</h1>
      <div className="w-full h-screen">
        <AccelerometerChartLarge data={data} />
      </div>
    </div>
  );
}