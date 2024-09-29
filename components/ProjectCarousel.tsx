import React, { FC, useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { Button } from "@/components/ui/button";

const ProjectCarousel: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projects: React.ReactElement[] = [
    <ProjectCard key="1" />,
    <ProjectCard key="2" />
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <section
      className="relative max-w-lg mx-auto p-6 bg-white rounded-xl shadow-md dark:bg-blue-950"
      style={{ backgroundImage: "url('/images/bg-grey.webp')", backgroundSize: 'cover' }}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-black dark:text-white">2 Projets en cours</h2>
        <div className="flex space-x-2">
          <Button
            onClick={handlePrev}
            size="icon"
            className="rounded-full bg-gray-100 hover:bg-gray-600 text-black size-7 mr-1"
          >
            <ChevronLeftIcon className="size-5" />
          </Button>
          <Button
            onClick={handleNext}
            size="icon"
            className="rounded-full bg-gray-100 hover:bg-gray-600 text-black size-7"
          >
            <ChevronRightIcon className="size-5" />
          </Button>
        </div>
      </div>
      <div className="w-full overflow-hidden">
        <div
          className="transition-transform ease-in-out duration-300"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          <div className="flex">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full"
                style={{ minWidth: '100%' }}
              >
                {project}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel;
