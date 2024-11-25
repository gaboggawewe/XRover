'use client';

import { useEffect, useState } from 'react';
import AdcChartLarge from '../../../components/AdcChartLarge';

export default function ADCPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/adc-data');
      const result = await response.json();
      setData(result);
    }

    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">ADC Data</h1>
      <div className="w-full h-screen">
        <AdcChartLarge data={data} />
      </div>
    </div>
  );
}