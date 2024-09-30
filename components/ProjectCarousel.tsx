import React, { FC, useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { v4 as uuidv4 } from 'uuid';
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
    console.log('clicked');
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="bg-[url('/images/bg-gray.webp')] bg-cover relative max-w-lg mx-auto p-6 bg-white rounded-xl dark:bg-blue-950">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-lg font-semibold text-black dark:text-white">2 Projets en cours</h2>
        <div className="flex space-x-2">
          <Button
            onClick={handlePrev}
            size="icon"
            className="rounded-full bg-gray-100 hover:bg-gray-600 text-[#121724] size-6 mr-1"
          >
            <ChevronLeftIcon className="size-4" />
          </Button>
          <Button
            onClick={handleNext}
            size="icon"
            className="rounded-full bg-gray-100 hover:bg-gray-600 text-[#121724] size-6"
          >
            <ChevronRightIcon className="size-4" />
          </Button>
        </div>
      </div>
      <div className="w-full overflow-hidden">
        <div className={`transition-transform ease-in-out duration-300`}
           style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          <div className="flex">
            {projects.map((project) => (
              <div
                key={uuidv4()}
                className="flex-shrink-0 w-full min-w-full"
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
