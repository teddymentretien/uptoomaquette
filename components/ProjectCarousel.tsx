import { useState } from 'react';
import ProjectCard from '@/components/ProjectCard'; // Utiliser la même carte pour chaque élément du carousel
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { Button } from "@/components/ui/button";

const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
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
        className="relative max-w-lg mx-auto p-6 bg-white rounded-xl shadow-md"
        style={{ backgroundImage: "url('/images/bg-grey.jpg')", backgroundSize: 'cover' }} // Image de fond gris avec les patterns
    >
      <div className="flex justify-between items-center mb-4">
        {/* Title */}
        <h2 className="text-xl font-bold text-black">2 Projets en cours</h2>

        {/* Pagination Buttons */}
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

      {/* Carousel Content */}
      <div className="w-full overflow-hidden">
        <div
          className="transition-transform ease-in-out duration-300"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          <div className="flex space-x-4">
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
