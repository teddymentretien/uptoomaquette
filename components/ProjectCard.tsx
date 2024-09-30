import { FC } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { CalendarDaysIcon } from '@heroicons/react/24/solid';

interface CardsData {
  title: string,
  total: number,
  sourcing: number,
  chasse: number
}

const ProjectCard: FC = () => {
  const cardsData: CardsData[] = [
    { title: 'Nombre de candidatures', total: 537, sourcing: 51, chasse: 1 },
    { title: 'Candidats évalués', total: 14, sourcing: 51, chasse: 1 },
    { title: 'Dossiers présentés', total: 537, sourcing: 51, chasse: 1 },
  ];

  return (
    <div className="relative w-[95%]">
      <Card className="relative z-10 bg-activeBlue text-white w-full p-2 rounded-xl border-none dark:bg-blue-900">
        <CardHeader className="flex flex-col space-y-2 p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-sm">Recrutement</span>
          </div>
          <CardTitle className="text-xl font-semibold">POP - SDR Levallois</CardTitle>
          <CardDescription className="flex items-center text-white text-opacity-80 text-base">
            <CalendarDaysIcon className="mr-2 size-4" aria-hidden="true" />
            Lancée le 12/01/23
          </CardDescription>
        </CardHeader>
        <CardContent className="py-0 px-3 mb-3 space-y-1">
          {cardsData.map((cardData) => (
            <div key={cardData.title} className="bg-white text-black rounded-lg p-4 px-6 dark:bg-gray-300">
              <p className="text-base">{cardData.title}</p>
              <div className="flex items-center ">
                <p className="font-semibold text-[25px]">{cardData.total}</p>
                <p className="text-m text-[#a9b1c7] pl-6">
                  <span className="block dark:text-black font-semibold text-sm">
                    <span className="text-green-500">{cardData.sourcing}</span>
                    &nbsp;Sourcing
                  </span>
                  <span className="block dark:text-black font-semibold text-sm">
                    <span className="text-[#5e6273] dark:text-black">{cardData.chasse}</span>
                    &nbsp;Chasse
                  </span>
                </p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
      <div className="absolute top-0 bottom-0 m-auto right-[-12px] w-8 h-[86%] bg-[#7aa4f6] rounded-xl z-0 dark:bg-gray-300"></div>
    </div>
  );
};

export default ProjectCard;
