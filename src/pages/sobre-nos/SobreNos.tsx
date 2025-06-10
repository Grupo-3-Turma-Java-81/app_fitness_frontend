import { useState } from "react";

import { equipe } from "./Equipe";

import img1 from "../../assets/logo-pulso/logo-pulso-fundo-cinza.png";
import img2 from "../../assets/logo-code-cubo/code-cubo-logo.png";

function SobreNos() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === equipe.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? equipe.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="min-h-screen bg-black p-8 pb-20">
            <h1 className="text-4xl font-bold text-center mb-12 text-white relative">
                Sobre Nós
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#D7FF00] mt-2"></div>
            </h1>

            <div className="flex justify-center mb-16">
                <div className="flex flex-col gap-8 max-w-6xl w-full px-4 bg-black rounded-lg shadow-lg p-8 border border-zinc-800">
                    <div className="flex items-center gap-8">
                        <a
                            href="https://github.com/Grupo-3-Turma-Java-81/crm-frontend/tree/main"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-transform hover:scale-105"
                        >
                            <img
                                src={img1}
                                alt="Logo do Pulso"
                                className="w-64 h-64 object-contain drop-shadow-xl"
                            />
                        </a>

                        <div className="flex flex-col gap-8 text-justify">
                            <p className="max-w-3xl text-white leading-relaxed text-lg">
                                O sistema da Academia Pulso é simples e eficiente para o cadastro e consulta de alunos, além do registro de seus respectivos treinos. Voltado para o uso interno de academias, substitui métodos manuais de organização dos alunos por uma solução digital ágil e segura.
                            </p>

                            <div className="max-w-3xl bg-zinc-700 p-6 rounded-lg border-2 border-[#D7FF00] shadow-lg hover:shadow-xl transition-all duration-300">
                                <p className="font-bold text-white mb-3 text-xl">Nosso objetivo:</p>
                                <p className="leading-relaxed text-white">
                                    Automatizar o gerenciamento de dados básicos dos Alunos da Acedemia, melhorando
                                    a organização do ambiente de treino, reduzindo erros e aumentando a eficiência
                                    no gerenciamento de treinos dos alunos.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="border-t-2 border-[#D7FF00]/20 pt-8 mt-4">
                        <p className="font-bold text-white mb-4 text-center text-xl">Realizado por:</p>
                        <div className="flex flex-col items-center">
                            <img
                                src={img2}
                                alt="Logo Code-Cubo"
                                className="h-32 object-contain filter brightness-0 invert hover:scale-105 transition-transform duration-300 mb-6"
                            />
                            <div className="max-w-3xl text-center">
                                <p className="text-white leading-relaxed mb-4">
                                    A Code ao Cubo é uma empresa de tecnologia formada por desenvolvedores apaixonados por resolver problemas reais com soluções simples e inteligentes. A gente acredita que tecnologia boa é aquela que funciona sem complicar.
                                </p>
                                <p className="text-white leading-relaxed">
                                    Nosso compromisso é entregar sistemas que realmente transformam — seja no RH, na saúde, no financeiro ou onde for preciso.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-16 mb-8">
                <h2 className="text-4xl font-bold text-center text-white relative inline-block mx-auto w-full">
                    Membros da Equipe
                    <div className="absolute left-1/2 transform -translate-x-1/2 mt-2">
                        <div className="h-1 w-24 bg-gradient-to-r from-[#D7FF00] to-white"></div>
                    </div>
                </h2>
            </div>

            <div className="max-w-full mx-auto px-4 py-8">
                <div className="relative max-w-[320px] mx-auto">

                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 bg-zinc-800/80 hover:bg-zinc-700 text-white p-3 rounded-full z-10 backdrop-blur-sm transition-all duration-300 group"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 group-hover:text-[#D7FF00]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <div className="transform transition-all duration-500 ease-in-out">
                        <div className="bg-zinc-800 rounded-2xl overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                            <div className="relative h-80 overflow-visible z-10">
                                <img
                                    src={equipe[currentIndex].imagem}
                                    alt={`Imagem de ${equipe[currentIndex].nome}`}
                                    className="w-full h-full object-cover"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-800 via-transparent to-transparent"></div>

                                <div className="absolute bottom-4 right-4 flex space-x-2 z-50">
                                    {equipe[currentIndex].github && (
                                        <a
                                            href={equipe[currentIndex].github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title="GitHub"
                                            className="bg-zinc-900/80 p-2 rounded-full shadow-md hover:scale-110 transition-transform duration-200 backdrop-blur-sm"
                                        >
                                            <svg className="w-5 h-5 text-[#D7FF00]" viewBox="0 0 24 24" fill="currentColor">
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303
                                                            3.438 9.8 8.205 11.385.6.113.82-.258.82-.577
                                                            0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.084-.729.084-.729
                                                            1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.304
                                                            3.492.997.108-.776.418-1.305.76-1.605-2.665-.3-5.467-1.334-5.467-5.93
                                                            0-1.31.47-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176
                                                            0 0 1.005-.322 3.3 1.23a11.52 11.52 0 0 1 3-.405
                                                            11.52 11.52 0 0 1 3 .405c2.28-1.552 3.285-1.23
                                                            3.285-1.23.645 1.653.24 2.873.12 3.176.765.84
                                                            1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475
                                                            5.92.42.36.81 1.096.81 2.215 0 1.6-.015 2.89-.015
                                                            3.285 0 .315.21.69.825.57C20.565 22.092 24 17.592
                                                            24 12.297c0-6.627-5.373-12-12-12"
                                                />
                                            </svg>
                                        </a>
                                    )}

                                    {equipe[currentIndex].linkedin && (
                                        <a
                                            href={equipe[currentIndex].linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title="LinkedIn"
                                            className="bg-zinc-900/80 p-2 rounded-full shadow-md hover:scale-110 transition-transform duration-200 backdrop-blur-sm"
                                        >
                                            <svg className="w-5 h-5 text-[#D7FF00]" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M19 0h-14C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5V5c0-2.761-2.239-5-5-5zM7.12
                                                            20.452H3.56V9h3.56v11.452zM5.34 7.451c-1.141 0-2.064-.923-2.064-2.059 0-1.14.923-2.063 2.064-2.063
                                                            1.136 0 2.059.923 2.059 2.063 0 1.136-.923 2.059-2.059 2.059zM20.452 20.452h-3.561v-5.558c0-1.325-.027-3.031-1.846-3.031-1.849
                                                            0-2.132 1.444-2.132 2.938v5.651h-3.559V9h3.414v1.561h.049c.476-.899 1.637-1.847 3.369-1.847 3.6 0 4.267 2.368 4.267 5.449v6.289z" />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#D7FF00] transition-colors duration-300">
                                    {equipe[currentIndex].nome}
                                </h3>

                                <div className="flex items-center gap-3 mb-4">
                                    <div className="h-px w-8 bg-gradient-to-r from-[#D7FF00] to-transparent"></div>
                                    <p className="text-[#D7FF00] font-medium">
                                        {equipe[currentIndex].descricao}
                                    </p>
                                </div>

                                <p className="text-white/80 leading-relaxed text-sm">
                                    {equipe[currentIndex].sobre}
                                </p>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 bg-zinc-800/80 hover:bg-zinc-700 text-white p-3 rounded-full z-10 backdrop-blur-sm transition-all duration-300 group"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 group-hover:text-[#D7FF00]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    <div className="flex justify-center gap-2 mt-6">
                        {equipe.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? 'bg-[#D7FF00] w-6'
                                    : 'bg-zinc-600 hover:bg-zinc-500'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SobreNos