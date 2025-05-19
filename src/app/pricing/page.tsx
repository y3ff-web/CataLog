'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Carousel from '@/app/components/Carousel';


// Define el type Plan (puedes colocarlo en un archivo aparte como types/plan.ts si lo prefieres)
type Plan = {
  name: 'Básico' | 'Profesional' | 'Empresarial';
  price: 10 | 20 | 50;
  productLimit: number | 'Ilimitado';
  support: 'Sin soporte personalizado' | 'Soporte prioritario' | 'Catálogo personalizado';
};

const PricingPage = () => {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const router = useRouter();

  //se guarda el precio y el limite de productos
  const plans: Plan[] = [
    { name: 'Básico', price: 10, productLimit: 10, support: 'Sin soporte personalizado' },
    { name: 'Profesional', price: 20, productLimit: 50, support: 'Soporte prioritario' },
    { name: 'Empresarial', price: 50, productLimit: 'Ilimitado', support: 'Catálogo personalizado' },
  ];

  //guarda la seleccion del plan
  const handlePlanSelection = (plan: Plan) => {
    setSelectedPlan(plan);
    console.log('Plan seleccionado:', plan);

  };

  //redirige a la pagina de metodos de pago
  const handleContinue = () => {
    if (selectedPlan) {
      
      router.push('/payment'); 
    } else {
      alert('Por favor, selecciona un plan para continuar.');
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-900 via-blue-500 to-white-700 min-h-screen flex flex-col items-center justify-center py-10">
      <h1 className="text-4xl font-bold text-white mb-8">Elige tu plan</h1>
          <Carousel
            baseWidth={300}
            autoplay={true}
            autoplayDelay={3000}
            pauseOnHover={true}
            loop={true}
            round={false}
          />
          <br />
      <div className="flex flex-col md:flex-row gap-8 mb-10">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`bg-white rounded-xl shadow-lg p-8 w-72 border-2 transition-all duration-300 cursor-pointer ${
              selectedPlan?.name === plan.name
                ? 'border-blue-600 scale-105 ring-4 ring-blue-200'
                : 'border-transparent hover:scale-105 hover:border-blue-400'
            }`}
            onClick={() => handlePlanSelection(plan)}
          >
            <h2 className="text-2xl font-semibold mb-2 text-blue-800">{plan.name}</h2>
            <p className="text-4xl font-bold text-blue-700 mb-4">${plan.price}<span className="text-base font-normal text-gray-500">/mes</span></p>
            <ul className="mb-4 space-y-2">
              <li className="flex items-center">
                <span className="material-icons text-blue-500 mr-2">Cantidad: </span>
                <span>
                  {plan.productLimit === 'Ilimitado'
                    ? 'Productos ilimitados'
                    : `${plan.productLimit} productos`}
                </span>
              </li>
              <li className="flex items-center">
                <span className="material-icons text-blue-500 mr-2">Atencion al cliente</span>
                <span>{plan.support}</span>
              </li>
            </ul>
            {selectedPlan?.name === plan.name && (
              <div className="text-green-600 font-semibold text-sm">Seleccionado</div>
            )}
          </div>
        ))}
      </div>
      <button
        onClick={handleContinue}
        className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-200"
      >
        Continuar
      </button>
    </div>
  );
};

export default PricingPage;