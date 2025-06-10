import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from '../../assets/card-home/card-home-1.png';
import img2 from '../../assets/card-home/card-home-2.png';
import img3 from "../../assets/academia/equipamentos.png";
import img5 from "../../assets/academia/vestiario.jpg";

const Home: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dotsClass: "slick-dots !bottom-[-30px]",
        customPaging: () => (
            <div className="w-3 h-3 mx-1 rounded-full bg-zinc-600 hover:bg-[#D7FF00] transition-colors duration-300 [.slick-active_&]:bg-[#D7FF00]" />
        )
    };

    return (
        <div className="min-h-screen bg-black font-['Inter']">
            <main>
                <section className="min-h-screen flex flex-col items-center justify-start relative overflow-hidden">
                    <div className="w-full relative mb-16">
                        <div className="[&_.slick-dots]:gap-2 [&_.slick-dots]:flex [&_.slick-dots]:justify-center [&_.slick-dots]:mt-4">
                            <Slider {...settings}>
                                <div>
                                    <img
                                        src={img1}
                                        alt="Preguiça Off Shape On 1"
                                        className="w-full h-[90vh] object-cover shadow-[0_0_30px_rgba(215,255,0,0.3)]"
                                    />
                                </div>
                                <div>
                                    <img
                                        src={img2}
                                        alt="Preguiça Off Shape On 2"
                                        className="w-full h-[90vh] object-cover shadow-[0_0_30px_rgba(215,255,0,0.3)]"
                                    />
                                </div>
                            </Slider>
                        </div>
                    </div>
                </section>

                <section id='planos' className="relative z-20 pt-32 pb-24 bg-white">
                    <div className="w-full max-w-[1400px] mx-auto px-4">

                        <h2 className="text-center mb-20 text-6xl font-black tracking-tight">
                            <span className="text-black">Conheça nossos </span>
                            <span className="text-[#D7FF00] relative">
                                PLANOS:
                                <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#D7FF00] opacity-50"></span>
                            </span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center">
                            <div className="bg-zinc-800 w-full max-w-sm p-10 rounded-xl transform hover:scale-105 transition-all duration-500 flex flex-col justify-between min-h-[500px] shadow-[0_0_20px_rgba(215,255,0,0.3)] hover:shadow-[0_0_30px_rgba(215,255,0,0.5)]">
                                <div>

                                    <div className="text-white text-4xl font-black mb-6 text-center tracking-tight">
                                        PLANO BÁSICO
                                    </div>

                                    <p className="text-white text-xl mb-8 text-center leading-relaxed">
                                        Plano para você que quer apenas fazer musculação
                                    </p>
                                    <div className="text-[#D7FF00] text-5xl font-black text-center mb-8">
                                        R$ 89,99<span className="text-white text-2xl">/mês</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-zinc-800 w-full max-w-sm p-10 rounded-xl transform hover:scale-105 transition-all duration-500 flex flex-col justify-between min-h-[500px] shadow-[0_0_20px_rgba(215,255,0,0.3)] hover:shadow-[0_0_30px_rgba(215,255,0,0.5)] md:scale-110">
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#D7FF00] text-black px-6 py-1 rounded-full text-sm font-bold">
                                    MAIS POPULAR
                                </div>

                                <div>
                                    <div className="text-white text-4xl font-black mb-6 text-center tracking-tight">
                                        PLANO PLUS
                                    </div>

                                    <p className="text-white text-xl mb-8 text-center leading-relaxed">
                                        Com musculação e aulas de dança ou artes marciais opcionais.
                                    </p>

                                    <div className="text-[#D7FF00] text-5xl font-black text-center mb-8">
                                        R$ 109,99<span className="text-white text-2xl">/mês</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-zinc-800 w-full max-w-sm p-10 rounded-xl transform hover:scale-105 transition-all duration-500 flex flex-col justify-between min-h-[500px] shadow-[0_0_20px_rgba(215,255,0,0.3)] hover:shadow-[0_0_30px_rgba(215,255,0,0.5)]">
                                <div>
                                    <div className="text-white text-4xl font-black mb-6 text-center tracking-tight">
                                        PLANO MEGA
                                    </div>

                                    <p className="text-white text-xl mb-8 text-center leading-relaxed">
                                        Todos os benefícios com o adicional de acompanhamento nutricional
                                    </p>

                                    <div className="text-[#D7FF00] text-5xl font-black text-center mb-8">
                                        R$ 149,99<span className="text-white text-2xl">/mês</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24 relative">
                    <div className="absolute inset-0 bg-black"></div>
                    <div className="w-full max-w-[1400px] mx-auto px-4 relative z-10">

                        <h2 className="text-center mb-16 text-6xl font-black tracking-tight">
                            <span className="text-white">Nossos </span>
                            <span className="text-[#D7FF00] relative">
                                Diferenciais!
                                <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#D7FF00] opacity-50"></span>
                            </span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center">
                            <div className="bg-zinc-800 w-full max-w-sm p-8 rounded-xl transform hover:scale-105 transition-all duration-500 shadow-[0_0_20px_rgba(215,255,0,0.2)] hover:shadow-[0_0_30px_rgba(215,255,0,0.4)]">

                                <div className="w-full h-56 mb-6 overflow-hidden rounded-lg relative group">
                                    <img
                                        src={img3}
                                        alt="Equipamentos Modernos"
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                </div>

                                <h3 className="text-white text-2xl font-black mb-4 text-center tracking-tight">
                                    Equipamentos Modernos
                                </h3>

                                <p className="text-white text-lg text-center leading-relaxed">
                                    Academia equipada com aparelhos de última geração para seu treino
                                </p>
                            </div>

                            <div className="bg-zinc-800 w-full max-w-sm p-8 rounded-xl transform hover:scale-105 transition-all duration-500 shadow-[0_0_20px_rgba(215,255,0,0.2)] hover:shadow-[0_0_30px_rgba(215,255,0,0.4)]">
                                <div className="w-full h-56 mb-6 overflow-hidden rounded-lg relative group">
                                    <img
                                        src="/professores/equipe-professores.png"
                                        alt="Professores Qualificados"
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                </div>

                                <h3 className="text-white text-2xl font-black mb-4 text-center tracking-tight">
                                    Professores Qualificados
                                </h3>
                                <p className="text-white text-lg text-center leading-relaxed">
                                    Equipe de profissionais especializados para te auxiliar
                                </p>
                            </div>

                            <div className="bg-zinc-800 w-full max-w-sm p-8 rounded-xl transform hover:scale-105 transition-all duration-500 shadow-[0_0_20px_rgba(215,255,0,0.2)] hover:shadow-[0_0_30px_rgba(215,255,0,0.4)]">
                                <div className="w-full h-56 mb-6 overflow-hidden rounded-lg relative group">
                                    <img
                                        src={img5}
                                        alt="Estrutura Completa"
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                </div>

                                <h3 className="text-white text-2xl font-black mb-4 text-center tracking-tight">
                                    Estrutura Completa
                                </h3>
                                <p className="text-white text-lg text-center leading-relaxed">
                                    Ambiente climatizado, vestiários modernos e área de treino espaçosa
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id='unidades' className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4">

                        <h2 className="text-center mb-16 text-6xl font-black tracking-tight">
                            <span className="text-black">Onde </span>
                            <span className="text-[#D7FF00] relative">
                                estamos?
                                <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#D7FF00] opacity-50"></span>
                            </span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-zinc-800 rounded-xl p-6">

                                <h3 className="text-[#D7FF00] text-2xl text-center font-bold mb-4">Unidade 1 - Paulista</h3>
                                <div className="w-full h-[300px] rounded-xl overflow-hidden shadow-[0_0_30px_rgba(215,255,0,0.3)] hover:shadow-[0_0_40px_rgba(215,255,0,0.5)] transition-all duration-300 mb-4">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.098839332921!2d-46.65620382374385!3d-23.563200261667813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0x63b9f0a1a0496d76!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1709750799744!5m2!1spt-BR!2sbr"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Unidade Paulista"
                                        className="w-full h-full"
                                    />
                                </div>
                                <p className="text-white text-center text-lg">Av. Paulista, 1000 - Bela Vista, São Paulo - SP, 01310-100</p>
                            </div>

                            <div className="bg-zinc-800 rounded-xl p-6">
                                <h3 className="text-[#D7FF00] text-2xl text-center font-bold mb-4">Unidade 2 - Pinheiros</h3>
                                <div className="w-full h-[300px] rounded-xl overflow-hidden shadow-[0_0_30px_rgba(215,255,0,0.3)] hover:shadow-[0_0_40px_rgba(215,255,0,0.5)] transition-all duration-300 mb-4">

                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.3463905211386!2d-46.69033612374405!3d-23.556575861671844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce579d0cf9d4f9%3A0x8b03e50f5c324815!2sPinheiros%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1709750799744!5m2!1spt-BR!2sbr"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Unidade Pinheiros"
                                        className="w-full h-full"
                                    />
                                </div>
                                <p className="text-white text-center text-lg">Rua dos Pinheiros, 500 - Pinheiros, São Paulo - SP, 05422-000</p>
                            </div>

                            <div className="bg-zinc-800 rounded-xl p-6">
                                <h3 className="text-[#D7FF00] text-2xl text-center font-bold mb-4">Unidade 3 - Moema</h3>

                                <div className="w-full h-[300px] rounded-xl overflow-hidden shadow-[0_0_30px_rgba(215,255,0,0.3)] hover:shadow-[0_0_40px_rgba(215,255,0,0.5)] transition-all duration-300 mb-4">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.4898017789917!2d-46.66747562374325!3d-23.593374561650673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a0c6a34f011%3A0x42f6e0c740c1654!2sMoema%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1709750799744!5m2!1spt-BR!2sbr"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Unidade Moema"
                                        className="w-full h-full"
                                    />
                                </div>
                                <p className="text-white text-center text-lg">Alameda dos Maracatins, 780 - Moema, São Paulo - SP, 04089-001</p>
                            </div>

                            <div className="bg-zinc-800 rounded-xl p-6">
                                <h3 className="text-[#D7FF00] text-2xl text-center font-bold mb-4">Unidade 4 - Vila Mariana</h3>

                                <div className="w-full h-[300px] rounded-xl overflow-hidden shadow-[0_0_30px_rgba(215,255,0,0.3)] hover:shadow-[0_0_40px_rgba(215,255,0,0.5)] transition-all duration-300 mb-4">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.8598006595287!2d-46.63983562374355!3d-23.582674561656675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5990aa924f3b%3A0x3e9f3a76e1ebfb69!2sVila%20Mariana%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1709750799744!5m2!1spt-BR!2sbr"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Unidade Vila Mariana"
                                        className="w-full h-full"
                                    />
                                </div>
                                <p className="text-white text-center text-lg">Rua Vergueiro, 1500 - Vila Mariana, São Paulo - SP, 04101-000</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Home;
