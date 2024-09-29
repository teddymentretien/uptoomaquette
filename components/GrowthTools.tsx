import { FC } from 'react';
import { Button } from './ui/button';
import Image from 'next/image';

const GrowthTools: FC = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md dark:bg-blue-950">
      <h2 className="text-xl font-bold mb-4 text-gray-900 py-4 dark:text-white">Découvrez vos outils pour gagner des points de croissance</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="relative bg-white border rounded-2xl shadow-sm p-7 pt-10 dark:bg-gray-300">
          <div className="flex items-center justify-between">
            <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-1 rounded-md">Gratuit</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mt-5">Scan</h2>
          <p className="text-gray-500">Quelles sont les forces et faiblesses de votre exécution commerciale ?</p>
          <Button className="mt-4 bg-blue-600 text-white py-3 w-full text-lg rounded-lg dark:bg-blue-800">Évaluer mes commerciaux</Button>
          <Image src="/images/trophy.webp" width={120} height={80} alt="Trophy" className="absolute top-5 right-12 transform translate-x-1/4 -translate-y-1/4" />
        </div>
        <div className="relative bg-white border rounded-2xl shadow-sm p-7 pt-10 dark:bg-gray-300">
          <div className="flex items-center justify-between">
            <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-1 rounded-md">5 évaluations gratuites</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mt-5">Assessment</h2>
          <p className="text-gray-500">Quel est le niveau de vos commerciaux et leurs axes de progression ?</p>
          <Button className="mt-4 bg-blue-600 text-white w-full text-lg rounded-lg dark:bg-blue-800">Évaluer mes commerciaux</Button>
          <Image src="/images/cheese.webp" width={120} height={80} alt="Cheese" className="absolute top-5 right-12 transform translate-x-1/4 -translate-y-1/4" />
        </div>
      </div>
    </div>
  );
};

export default GrowthTools;
