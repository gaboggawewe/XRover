'use client';

import { useEffect, useState } from 'react';
import PressureChart from '../../../components/PressureChart';
import DistanceChart from '../../../components/DistanceChart';
import ADCChart from '../../../components/AdcChart';
import AccelerometerChart from '../../../components/AccelerometerChart';

export default function AllSensorsPage() {
  const [pressureData, setPressureData] = useState([]);
  const [distanceData, setDistanceData] = useState([]);
  const [adcData, setAdcData] = useState([]);
  const [accelerometerData, setAccelerometerData] = useState([]);

  useEffect(() => {
    async function fetchPressureData() {
      const response = await fetch('/api/pressure-data');
      const result = await response.json();
      setPressureData(result);
    }

    async function fetchDistanceData() {
      const response = await fetch('/api/distance-data');
      const result = await response.json();
      setDistanceData(result);
    }

    async function fetchAdcData() {
      const response = await fetch('/api/adc-data');
      const result = await response.json();
      setAdcData(result);
    }

    async function fetchAccelerometerData() {
      const response = await fetch('/api/accelerometer-data');
      const result = await response.json();
      setAccelerometerData(result);
    }

    fetchPressureData();
    fetchDistanceData();
    fetchAdcData();
    fetchAccelerometerData();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">All Sensors Data</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Pressure Sensor Data</h2>
          <PressureChart data={pressureData} />
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Distance Sensor Data</h2>
          <DistanceChart data={distanceData} />
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">ADC Data</h2>
          <ADCChart data={adcData} />
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Accelerometer Data</h2>
          <AccelerometerChart data={accelerometerData} />
        </div>
      </div>
    </div>
  );
}