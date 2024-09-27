// components/Studies.tsx
import { FC } from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image'; // Utilisation de Next.js pour l'optimisation des images

const studies = [
  {
    title: 'Les tendances du marché du recrutement de commerciaux',
    imageUrl: '/images/uptoo1.webp', // Remplacer par le chemin des images
  },
  {
    title: 'Combien gagnent réellement les commerciaux en 2024 ?',
    imageUrl: '/images/uptoo2.webp',
  },
  {
    title: 'Enjeux des directions commerciales pour 2023',
    imageUrl: '/images/uptoo3.webp',
  },
  {
    title: "L'onboarding : Comment bien intégrer ses commerciaux",
    imageUrl: '/images/uptoo4.webp',
  },
];

const Studies: FC = () => {
  return (
    <div className="py-4">
      <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-bold text-gray-900">Études</h2>
        <a href="#" className="flex items-center text-gray-900 hover:underline font-semibold">
          Tout voir
          <ChevronRightIcon className="h-5 w-5 ml-1" />
        </a>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {studies.map((study, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-sm">
            <Image
              src={study.imageUrl}
              alt={study.title}
              width={300}
              height={400}
              className="object-cover w-full h-70 rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Studies;
