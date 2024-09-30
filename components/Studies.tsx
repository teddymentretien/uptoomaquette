import { FC } from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';

interface Study {
	title: string,
	imageUrl: string
}

const studies: Study[] = [
  {
    title: 'Les tendances du marché du recrutement de commerciaux',
    imageUrl: '/images/uptoo1.webp',
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
    <div className="pt-4">
      <div className="flex justify-between items-center mb-3">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white">Études</h2>
        <Link href="#" className="flex items-center text-gray-900 hover:underline font-semibold dark:text-white">
          Tout voir
          <ChevronRightIcon className="size-3 ml-1" />
        </Link>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-5">
        {studies.map((study, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-sm hover:scale-105 transition-all duration-00 ease-in-out">
            <Image
              src={study.imageUrl}
              alt={study.title}
              width={300}
              height={400}
              className="object-cover w-full h-64 rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Studies;
