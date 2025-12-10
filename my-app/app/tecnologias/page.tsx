import React from 'react'
import tecnologias from '@/app/data/tecnologias.json';

export default function page() {
  return (
    <>
    <h2>Tecnologias Exploradas</h2>
    
      <section className="grid gap-4 p-4">
     
      {tecnologias.map((tec) => (
        <article
          key={tec.title}
          className="p-4 border rounded-xl shadow bg-white"
        >
          <h3 className="text-xl font-bold">{tec.title}</h3>

          {tec.imagem && (
            <img 
              src={tec.imagem} 
              alt={tec.title} 
              className="w-16 h-16 object-contain my-2"
            />
          )}

          <p className="text-gray-700">{tec.description}</p>

          <p className="mt-2 font-semibold">
            ⭐ Rating: {tec.rating}/10
          </p>
        </article>
      ))}
    </section>
    
    </>
  )
}
