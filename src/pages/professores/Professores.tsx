import React from 'react';

const Professores: React.FC = () => {
  const professores = [
    {
      nome: "Ricardo Silva",
      unidade: "Unidade Paulista",
      imagem: "/professores/professor-1.jpg",
      especialidade: "Musculação e CrossFit"
    },
    {
      nome: "Amanda Santos",
      unidade: "Unidade Pinheiros",
      imagem: "/professores/professora-3.jpg",
      especialidade: "Yoga e Pilates"
    },
    {
      nome: "Carlos Oliveira",
      unidade: "Unidade Moema",
      imagem: "/professores/professor-2.jpg",
      especialidade: "Funcional e Boxing"
    },
    {
      nome: "Juliana Costa",
      unidade: "Unidade Vila Mariana",
      imagem: "/professores/professora-2.jpg",
      especialidade: "Dança e Zumba"
    },
    {
      nome: "Rafael Mendes",
      unidade: "Unidade Paulista",
      imagem: "/professores/professor-3.jpg",
      especialidade: "Musculação e Personal"
    },
    {
      nome: "Patricia Lima",
      unidade: "Unidade Pinheiros",
      imagem: "/professores/professora-1.jpg",
      especialidade: "Spinning e GAP"
    }
  ];

  return (
    <div className="min-h-screen bg-black font-['Inter'] py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center mb-16 text-6xl font-black tracking-tight">
          <span className="text-white">Conheça nossos </span>
          <span className="text-[#D7FF00] relative">
            professores
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#D7FF00] opacity-50"></span>
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {professores.map((professor, index) => (
            <div
              key={index}
              className="bg-zinc-800 rounded-xl p-6 transform hover:scale-105 transition-all duration-500 shadow-[0_0_20px_rgba(215,255,0,0.2)] hover:shadow-[0_0_30px_rgba(215,255,0,0.4)]"
            >

              <div className="w-48 h-48 mx-auto mb-6 overflow-hidden rounded-2xl relative group">
                <img
                  src={professor.imagem}
                  alt={professor.nome}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-[#D7FF00] text-2xl font-bold mb-2 text-center">
                {professor.nome}
              </h3>
              <p className="text-white text-lg mb-2 text-center">
                {professor.unidade}
              </p>

              <p className="text-zinc-400 text-md text-center">
                {professor.especialidade}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Professores;
