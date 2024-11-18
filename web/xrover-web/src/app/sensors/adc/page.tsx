'use client';

import { useEffect, useState } from 'react';
import ADCChart from '../../../components/AdcChart';

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
    <div>
      <h1 className="text-2xl font-bold mb-4">ADC Data</h1>
      <ADCChart data={data} />
    </div>
  );
}