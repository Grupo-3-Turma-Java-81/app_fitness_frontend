import React from 'react';

interface CardHomeProps {
    nome?: string;
    status?: 'ativo' | 'inativo';
    fotoUrl?: string;
}

const CardHome: React.FC<CardHomeProps> = ({
    nome = '',
    status = 'ativo',
    fotoUrl,
}) => {
    return (
        <div className="bg-zinc-700 hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="p-6 flex items-start space-x-6">
                <div className="flex flex-col items-center space-y-2">

                    <div className="w-24 h-24 rounded-full border-2 border-[#D7FF00] p-1">
                        {fotoUrl ? (
                            <img
                                src={fotoUrl}
                                alt={`Foto do ${nome}`}
                                className="w-full h-full rounded-full object-cover"
                            />
                        ) : (

                            <div className="w-full h-full rounded-full bg-[#F2F2F2] flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-12 w-12 text-[#75e81c]"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                    />
                                </svg>
                            </div>
                        )}
                    </div>

                    <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${status === 'ativo' ? 'bg-[#D7FF00] text-green-800' : 'bg-red-100 text-red-800'
                            }`}
                    >
                        {status === 'ativo' ? 'Ativo' : 'Inativo'}
                    </span>
                </div>

                <div className="flex items-center justify-start h-28 px-4">
                    <p className="text-4xl font-bold text-center mb-12 text-white relative">
                        Olá, {nome || '-'}
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#D7FF00] mt-2"></div>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CardHome;
