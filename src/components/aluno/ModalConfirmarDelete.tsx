import React from "react";

interface Props {
    nome: string;
    onConfirm: () => void;
    onCancel: () => void;
}

const ModalConfirmarDelete: React.FC<Props> = ({ nome, onConfirm, onCancel }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded shadow-md w-96">
                <h2 className="text-xl font-semibold mb-4">Confirmar Exclusão</h2>
                <p className="mb-4">Deseja realmente excluir <strong>{nome}</strong>?</p>
                <div className="flex justify-end gap-2">
                    <button onClick={onCancel} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
                        Cancelar
                    </button>
                    <button
                        onClick={() => {
                            console.log("Deletando aluno", nome); // ADD AQUI
                            onConfirm();
                        }}
                        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                    >
                        Deletar
                    </button>

                </div>
            </div>
        </div>
    );
};

export default ModalConfirmarDelete;
