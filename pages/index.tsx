import { FC } from 'react';
import Sidebar from '@/components/Sidebar';
import Dashboard from '@/components/Dashboard';

const Home: FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-900 dark:bg-blue-950 transition-all duration-200 ease-in-out">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-100 dark:bg-gray-900 rounded-tl-xxl mt-2">
        <Dashboard />
      </main>
    </div>
  );
};

export default Home;
