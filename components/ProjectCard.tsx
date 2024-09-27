import { FC } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

interface CardsData {
  title: string,
  total: number,
  sourcing: number,
  chasse: number
}

const ProjectCard: FC = () => {
  const cardsData: CardsData[] = [
    { title: 'Nombre de candidatures', total: 537, sourcing: 51, chasse: 1},
    { title: 'Candidats évalués', total: 14, sourcing: 51, chasse: 1},
    { title: 'Dossiers présentés', total: 537, sourcing: 51, chasse: 1},
  ];

  return (
    <Card className="relative bg-blue-500 text-white w-full max-w-lg p-3 rounded-lg shadow-lg">
      <CardHeader className="flex flex-col space-y-2 p-4">
        <div className="flex items-center justify-between">
          <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-1 rounded-md">Recrutement</span>
        </div>
        <CardTitle className="text-2xl font-semibold">POP - SDR Levallois</CardTitle>
        <CardDescription className="flex items-center text-white text-opacity-80 text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M8 7V3M16 7V3M3 11H21M5 19H19M7 23H17" />
          </svg>
          Lancée le 12/01/23
        </CardDescription>
      </CardHeader>

      <CardContent className="mt-4 px-3 space-y-1">
      {
        cardsData.map((cardData) => (
          <div className="bg-white text-black rounded-lg p-4">
            <p className="text-lg">{cardData.title}</p>
            <div className="flex items-center">
              <p className="text-3xl font-bold">{cardData.total}</p>
              <p className="text-m text-gray-500 pl-5">
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
  );
};

export default ProjectCard;
