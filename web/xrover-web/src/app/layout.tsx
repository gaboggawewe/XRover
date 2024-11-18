import '../styles/globals.css';
import Sidebar from '../components/Sidebar';

import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <Sidebar />
          <div className="flex-1 p-4">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}