'use client';

import { useEffect, useState } from 'react';
import TemperatureChart from '../../../components/TemperatureChart';
import PressureChart from '../../../components/PressureChart';
import AltitudeChart from '../../../components/AltitudeChart';

export default function PressurePage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/pressure-data');
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
      <h1 className="text-2xl font-bold mb-4">Pressure Sensor Data</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="w-full h-96">
          <TemperatureChart data={data} />
        </div>
        <div className="w-full h-96">
          <PressureChart data={data} />
        </div>
        <div className="w-full h-96 flex justify-center items-center lg:col-span-2">
          <div className="w-full lg:w-1/2">
            <AltitudeChart data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}