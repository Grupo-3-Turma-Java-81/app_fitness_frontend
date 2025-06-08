import React, { useState } from 'react';

import type { Treino } from '../../../models/Treino';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    treino: Treino | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, treino }) => {
    if (!isOpen || !treino) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-lg w-full">

                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold">Detalhes do Treino</h3>

                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="space-y-4">
                    <div>
                        <p className="font-semibold">Descrição:</p>
                        <p>{treino.descricao}</p>
                    </div>

                    <div>
                        <p className="font-semibold">Dia da Semana:</p>
                        <p>{treino.diaSemanaTreino}</p>
                    </div>

                    <div>
                        <p className="font-semibold">Tipo de Treino:</p>
                        <p>{treino.tipoTreino}</p>
                    </div>

                    <div>
                        <p className="font-semibold">Status:</p>
                        <p>{treino.status}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const CardTreinosAluno: React.FC = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedTreino, setSelectedTreino] = useState<Treino | null>(null);

    const treinos = [
        { id: 1, descricao: 'Treino A', diaSemanaTreino: 'Seg/Qua', tipoTreino: 'Força', status: 'Ativo' },
        { id: 2, descricao: 'Treino B', diaSemanaTreino: 'Ter/Qui', tipoTreino: 'Hipertrofia', status: 'Ativo' },
        { id: 3, descricao: 'Treino C', diaSemanaTreino: 'Sex', tipoTreino: 'Resistência', status: 'Ativo' },
        { id: 4, descricao: 'Treino D', diaSemanaTreino: 'Sáb', tipoTreino: 'Funcional', status: 'Ativo' },
    ];

    const handleTreinoClick = (treino: Treino) => {
        setSelectedTreino(treino);
        setModalOpen(true);
    };

    return (
        <div className="max-w-4xl mx-auto mb-6">
            <div className="bg-white border rounded-lg shadow-sm overflow-hidden">

                <div className="grid grid-cols-7 gap-4 px-4 py-2 text-sm font-semibold bg-yellow-300 items-center text-center">
                    <h2 className="col-span-7 text-center text-lg font-semibold text-[#00070D]">
                        Treinos
                    </h2>
                </div>

                <div className="p-6 grid grid-cols-2 gap-4">
                    {treinos.map((treino) => (
                        <button
                            key={treino.id}
                            onClick={() => handleTreinoClick(treino)}
                            className="bg-white border border-yellow-300 rounded-lg p-4 hover:bg-yellow-50 transition-colors duration-200 text-left"
                        >

                            <h3 className="font-semibold text-lg mb-2">{treino.descricao}</h3>
                            <p className="text-sm text-gray-600">Dias: {treino.diaSemanaTreino}</p>
                            <p className="text-sm text-gray-600">Tipo: {treino.tipoTreino}</p>
                        </button>
                    ))}
                </div>
            </div>

            <Modal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                treino={selectedTreino}
            />
        </div>
    );
};

export default CardTreinosAluno; 