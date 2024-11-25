import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';

export default function HomePage() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4 text-center">XRover</h1>
      <div className="flex justify-center mb-8">
        <Image src="/equipo.png" alt="Team" width={500} height={500} className="rounded-lg shadow-lg" />
      </div>
      <p className="text-xl mb-2 text-center">Alejandro Ignacio Vargas Cruz, Gabriel Gutiérrez Guerra, Santiago Ramírez Niño</p>
      <p className="text-xl mb-8 text-center">Implementación de Internet de las Cosas</p>
      <div className="flex justify-center">
        <a href="https://github.com/AlexNachoVC/XRover" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600">
          <FaGithub size={40} />
        </a>
      </div>
    </div>
  );
}