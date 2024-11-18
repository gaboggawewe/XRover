import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white">
      <div className="p-4">
        <h1 className="text-2xl font-bold">XRover</h1>
      </div>
      <nav className="mt-10">
        <ul>
          <li className="p-4">
            <Link href="/control">Control</Link>
          </li>
          <li className="p-4">
            <Link href="/sensors/temperature">Temperature</Link>
          </li>
          <li className="p-4">
            <Link href="/sensors/pressure">Pressure</Link>
          </li>
          <li className="p-4">
            <Link href="/sensors/distance">Distance</Link>
          </li>
          <li className="p-4">
            <Link href="/sensors/accelerometer">Accelerometer</Link>
          </li>
          <li className="p-4">
            <Link href="/sensors/all">All Sensors</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;