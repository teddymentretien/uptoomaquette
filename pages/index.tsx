import { FC } from 'react';
import Sidebar from '@/components/Sidebar';
import Dashboard from '@/components/Dashboard';
import { Helmet } from 'react-helmet';

const Home: FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-uptoo dark:bg-blue-950 transition-all duration-200 ease-in-out">
      <Helmet>
        <title>Uptoo : le 1er cabinet de recrutement Sales, Marketing & Ops</title>
      </Helmet>
      <Sidebar />
      <main className="flex-1 px-6 pt-5 pb-6 bg-gray-100 dark:bg-gray-900 rounded-tl-xxl mt-2">
        <Dashboard />
      </main>
    </div>
  );
};

export default Home;
