import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";


import type { Aluno } from '../../../models/Aluno';
import { AuthContext } from '../../../contexts/AuthContext';
import { atualizar, buscar, deletar } from '../../../services/Service';
import ModalEditarAluno from '../ModalEditarAluno';
import ModalConfirmarDelete from '../ModalConfirmarDelete';

const ListaAlunos = () => {
    const navigate = useNavigate()

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario?.token ?? "";

    const [alunos, setAlunos] = useState<Aluno[]>([]);
    const [loading, setLoading] = useState(true);

    const [modalEditar, setModalEditar] = useState<{
        id: number;
        nome: string;
        endereco: string;
        telefone: string;
        peso: number;
        altura: number;
    } | null>(null);

    const [modalDeletar, setModalDeletar] = useState<{ id: number; nome: string } | null>(null);

    useEffect(() => {
        if (!token) return;

        async function buscarAlunos() {
            setLoading(true);
            try {
                await buscar("/alunos/get-all", setAlunos, {
                    headers: { Authorization: token },
                });
            } catch (error: any) {
                if (error.toString().includes("403")) handleLogout();
                else console.error("Erro ao buscar alunos:", error);
            } finally {
                setLoading(false);
            }
        }

        buscarAlunos();
    }, [token, handleLogout]);

    const handleEditarAluno = async (
        id: number,
        dados: {
            nome: string;
            endereco: string;
            telefone: string;
            peso: number;
            altura: number;
        }
    ) => {
        try {
            await atualizar(
                `/alunos/atualizar/${id}`,
                dados,
                (data: Aluno) => {
                    setAlunos((prev) =>
                        prev.map((a) => (a.id === id ? data : a))
                    );
                },
                {
                    headers: { Authorization: token },
                }
            );
            setModalEditar(null);
        } catch (error) {
            console.error("Erro ao editar aluno:", error);
            alert("Erro ao editar aluno");
        }
    };

    const handleDeletarAluno = async () => {
        if (!modalDeletar) return;
        try {
            await deletar(`/alunos/deletar/${modalDeletar.id}`, {
                headers: { Authorization: token },
            });
            setAlunos((prev) => prev.filter((a) => a.id !== modalDeletar.id));
            setModalDeletar(null);
        } catch (error) {
            alert("Erro ao deletar aluno");
        }
    };

    return (
        <div className="bg-white min-h-screen py-4 px-4">
            <div className="max-w-6xl mx-auto bg-gray-200 p-8 rounded shadow">
                <h2 className="text-2xl font-bold text-center mb-8">Lista de alunos</h2>

                {loading ? (
                    <p className="text-center text-gray-600">Carregando...</p>
                ) : alunos.length === 0 ? (
                    <p className="text-center text-gray-600">Nenhum aluno encontrado.</p>
                ) : (
                    <div className="space-y-3 pl-20 pr-20">
                        {alunos.map((aluno) => (
                            <div
                                key={aluno.id}
                                className="flex items-center justify-between bg-white px-6 py-3 rounded"
                            >
                                <div className="flex items-center gap-4">
                                    <span className="text-gray-800">{aluno.nome}</span>
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => navigate(`/editar-aluno/${aluno.id}`)}
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
                                    >
                                        Editar
                                    </button>
                                    <button
                                        onClick={() => navigate(`/deletar-aluno/${aluno.id}`)}
                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
                                    >
                                        Deletar
                                    </button>
                                </div>
                            </div>
                        ))}

                        <div className="flex justify-end pt-4">
                            <button
                                className="bg-black text-white px-4 py-2 rounded text-sm hover:bg-gray-800"
                                onClick={() => alert("Implementar navegação")}
                            >
                                Próxima página
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>

    );
};

export default ListaAlunos;
