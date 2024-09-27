import { FC } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { CalendarDaysIcon } from '@heroicons/react/24/outline';

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
      {/* Carte principale */}
      <Card className="relative z-10 bg-blue-500 text-white w-full p-3 rounded-lg border-none">
        <CardHeader className="flex flex-col space-y-2 p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-1 rounded-md">Recrutement</span>
          </div>
          <CardTitle className="text-xl font-semibold">POP - SDR Levallois</CardTitle>
          <CardDescription className="flex items-center text-white text-opacity-80 text-l">
            <CalendarDaysIcon className="h-5 w-5 mr-2" aria-hidden="true" />
            Lancée le 12/01/23
          </CardDescription>
        </CardHeader>

        <CardContent className="py-0 px-3 mb-3 space-y-1">
          {cardsData.map((cardData) => (
            <div key={cardData.title} className="bg-white text-black rounded-lg p-4 px-6">
              <p className="text-l">{cardData.title}</p>
              <div className="flex items-center">
                <p className="text-2xl font-bold">{cardData.total}</p>
                <p className="text-m text-gray-500 pl-6">
                  <span className="block">
                    <span className="text-green-500 font-semibold">{cardData.sourcing}</span>
                    &nbsp;Sourcing
                  </span>
                  <span className="block">
                    <span className="text-gray-400 font-semibold">{cardData.chasse}</span>
                    &nbsp;Chasse
                  </span>
                </p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="absolute top-0 bottom-0 m-auto right-[-15px] w-8 h-[86%] bg-[#7aa4f6] rounded-xl z-0"></div>
    </div>
  );
};

export default ProjectCard;
