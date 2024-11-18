import Link from 'next/link';
import Image from 'next/image';
import { FaThermometerHalf, FaTachometerAlt, FaRuler, FaRobot } from 'react-icons/fa';
import { MdOutlineSensors, MdElectricBolt } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white">
      <div className="p-4 mt-8 mr-2 flex flex-col items-center">
        <Link href="/">
            <Image src="/Rover2.png" alt="XRover Logo" width={125} height={125} className="cursor-pointer" />
        </Link>
        <h1 className="text-2xl font-bold mt-8 ml-2">XRover</h1>
      </div>
      <nav className="mt-10">
        <ul>
          <li className="p-4">
            <Link href="/control" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
              <FaRobot />
              <span>Control</span>
            </Link>
          </li>
          <li className="p-4">
            <Link href="/sensors/pressure" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
              <FaThermometerHalf />
              <span>Pressure</span>
            </Link>
          </li>
          <li className="p-4">
            <Link href="/sensors/distance" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
              <FaRuler />
              <span>Distance</span>
            </Link>
          </li>
          <li className="p-4">
            <Link href="/sensors/accelerometer" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
              <FaTachometerAlt />
              <span>Accelerometer</span>
            </Link>
          </li>
          <li className="p-4">
            <Link href="/sensors/adc" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
              <MdElectricBolt />
              <span>ADC</span>
            </Link>
          </li>
          <li className="p-4">
            <Link href="/sensors/all" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
              <MdOutlineSensors />
              <span>All Sensors</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;