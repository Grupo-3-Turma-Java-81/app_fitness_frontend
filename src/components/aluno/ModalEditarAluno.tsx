import React, { useState } from "react";

interface Props {
    alunoId: number;
    nomeAtual: string;
    enderecoAtual: string;
    telefoneAtual: string;
    pesoAtual: number;
    alturaAtual: number;
    onClose: () => void;
    onSave: (
        id: number,
        dados: {
            nome: string;
            endereco: string;
            telefone: string;
            peso: number;
            altura: number;
        }
    ) => void;
}

const ModalEditarAluno: React.FC<Props> = ({
    alunoId,
    nomeAtual,
    enderecoAtual,
    telefoneAtual,
    pesoAtual,
    alturaAtual,
    onClose,
    onSave
}) => {
    const [nome, setNome] = useState(nomeAtual);
    const [endereco, setEndereco] = useState(enderecoAtual);
    const [telefone, setTelefone] = useState(telefoneAtual);
    const [peso, setPeso] = useState(pesoAtual);
    const [altura, setAltura] = useState(alturaAtual);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded shadow-md w-96">
                <h2 className="text-xl font-semibold mb-4">Editar Aluno</h2>

                <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Nome"
                    className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
                />
                <input
                    type="text"
                    value={endereco}
                    onChange={(e) => setEndereco(e.target.value)}
                    placeholder="Endereço"
                    className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
                />
                <input
                    type="text"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    placeholder="Telefone"
                    className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
                />
                <input
                    type="number"
                    value={peso}
                    onChange={(e) => setPeso(parseFloat(e.target.value))}
                    placeholder="Peso (kg)"
                    className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
                />
                <input
                    type="number"
                    value={altura}
                    onChange={(e) => setAltura(parseFloat(e.target.value))}
                    placeholder="Altura (cm)"
                    className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
                />

                <div className="flex justify-end gap-2">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={() => {
                            onSave(alunoId, {
                                nome,
                                endereco,
                                telefone,
                                peso,
                                altura,
                            });
                        }}
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        Salvar
                    </button>
                </div>
            </div>
        </div>
    );
};


export default ModalEditarAluno;
