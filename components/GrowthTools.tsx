import { FC } from 'react';
import { Button } from './ui/button';
import Image from 'next/image';

const GrowthTools: FC = () => {
  return (
    <div className="bg-white p-7 rounded-xl dark:bg-blue-950">
      <h2 className="text-xl font-bold mb-4 text-gray-900 pt-2 pb-4 dark:text-white">Découvrez vos outils pour gagner des points de croissance</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="grid-cols-1 relative bg-white border rounded-2xl shadow-sm p-7 pt-10 dark:bg-gray-300">
          <div className="flex items-center justify-between">
            <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-sm">Gratuit</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mt-5 mb-1">Scan</h2>
          <p className="text-black mb-3">Quelles sont les forces et faiblesses de votre exécution commerciale ?</p>
          <Button size="lg" className="mt-4 bg-activeBlue text-white w-full text-lg rounded-lg dark:bg-blue-800 dark:hover:bg-blue-950">Évaluer mes commerciaux</Button>
          <Image src="/images/trophy.webp" quality={80} width={120} height={80} alt="Trophy" className="absolute top-5 right-12 transform translate-x-1/4 -translate-y-1/4" />
        </div>
        <div className="grid-cols-1 relative bg-white border rounded-2xl shadow-sm p-7 pt-10 dark:bg-gray-300">
          <div className="flex items-center justify-between">
            <span className="bg-blue-100 text-activeBlue text-xs px-3 py-1 rounded-sm">5 évaluations gratuites</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mt-5 mb-1">Assessment</h2>
          <p className="text-black mb-3">Quel est le niveau de vos commerciaux et leurs axes de progression ?</p>
          <Button size="lg" className="mt-4 bg-activeBlue text-white w-full text-lg rounded-lg dark:bg-blue-800 dark:hover:bg-blue-950">Évaluer mes commerciaux</Button>
          <Image src="/images/cheese.webp" quality={80} width={120} height={80} alt="Cheese" className="absolute top-5 right-12 transform translate-x-1/4 -translate-y-1/4" />
        </div>
      </div>
    </div>
  );
};

export default GrowthTools;
