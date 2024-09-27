// pages/Dashboard.tsx
import React from 'react';
import UserCard from './UserCard';
import ProjectCarousel from './ProjectCarousel';
import GrowthTools from './GrowthTools';
import Studies from './Studies';

const Dashboard = () => {
  return (
    <div className="p-5">
      <div className="grid grid-cols-12 gap-6">
        {/* Colonne de gauche */}
        <div className="col-span-4 space-y-6">
          <UserCard />
          <ProjectCarousel />
        </div>

        {/* Colonne de droite */}
        <div className="col-span-8 flex flex-col justify-between h-full">
            <GrowthTools />
            <Studies />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
