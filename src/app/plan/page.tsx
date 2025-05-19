'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

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
    <div className="bg-dark-blue min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold text-dark-blue mb-6 text-center">Selecciona tu Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`border rounded-md p-4 cursor-pointer shadow-sm hover:shadow-md ${
                selectedPlan?.name === plan.name ? 'border-blue-500' : 'border-gray-300'
              }`}
              onClick={() => handlePlanSelection(plan)}
            >
              <h3 className="text-xl font-semibold text-dark-blue mb-2">{plan.name}</h3>
              <p className="text-gray-700 mb-2">Precio: <span className="font-bold">${plan.price}</span>/mes</p>
              <p className="text-gray-700 mb-2">Productos: {typeof plan.productLimit === 'number' ? plan.productLimit : 'Ilimitado'}</p>
              <p className="text-gray-700 text-sm">Soporte: {plan.support}</p>
              {selectedPlan?.name === plan.name && (
                <div className="absolute top-2 right-2">
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
        <button
          onClick={handleContinue}
          className="bg-dark-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          disabled={!selectedPlan}
        >
          Continuar al Pago
        </button>
        <p className="text-center text-gray-600 text-xs mt-4">
          ¿Ya tienes una cuenta? <Link href="/login" className="font-semibold text-dark-blue hover:text-blue-700">Inicia Sesión</Link>
        </p>
      </div>
    </div>
  );
};

export default PricingPage;