import { useContext, useEffect, useState } from "react";
import { atualizar, buscar, deletar } from "../../services/Service";

import type { Aluno } from "../../models/Aluno";
import ModalEditarAluno from "./ModalEditarAluno";
import { AuthContext } from "../../contexts/AuthContext";
import ModalConfirmarDelete from "./ModalConfirmarDelete";

const ListaAlunos = () => {
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
                `/alunos/${id}`,
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
            await deletar(`/alunos/${modalDeletar.id}`, {
                headers: { Authorization: token },
            });
            setAlunos((prev) => prev.filter((a) => a.id !== modalDeletar.id));
            setModalDeletar(null);
        } catch (error) {
            alert("Erro ao deletar aluno");
        }
    };

    return (
        <div className="bg-gray-200 py-12 px-4 min-h-screen">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold text-center mb-8">Lista de alunos</h2>

                {loading ? (
                    <p className="text-center text-gray-600">Carregando...</p>
                ) : alunos.length === 0 ? (
                    <p className="text-center text-gray-600">Nenhum aluno encontrado.</p>
                ) : (
                    <div className="space-y-4">
                        {alunos.map((aluno, index) => (
                            <div
                                key={aluno.id}
                                className="bg-white flex items-center justify-between px-6 py-4 rounded shadow"
                            >
                                <div className="flex items-center gap-6">
                                    <span className="font-semibold">{index + 1}</span>
                                    <span className="text-gray-800">{aluno.nome}</span>
                                </div>
                                {/* <div className="flex gap-2">
                                    <button
                                        onClick={() =>
                                            setModalEditar({
                                                id: aluno.id!,
                                                nome: aluno.nome,
                                                endereco: aluno.endereco,
                                                telefone: aluno.telefone,
                                                peso: aluno.peso,
                                                altura: aluno.altura,
                                            })
                                        }
                                    >
                                        Editar
                                    </button>

                                    <button
                                        onClick={() => setModalDeletar({ id: aluno.id!, nome: aluno.nome })}
                                        className="bg-black text-white px-4 py-1 rounded hover:bg-red-600 transition"
                                    >
                                        Deletar
                                    </button>
                                </div> */}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {modalEditar && (
                <ModalEditarAluno
                    alunoId={modalEditar.id}
                    nomeAtual={modalEditar.nome}
                    enderecoAtual={modalEditar.endereco}
                    telefoneAtual={modalEditar.telefone}
                    pesoAtual={modalEditar.peso}
                    alturaAtual={modalEditar.altura}
                    onClose={() => setModalEditar(null)}
                    onSave={handleEditarAluno}
                />
            )}

            {modalDeletar && (
                <ModalConfirmarDelete
                    nome={modalDeletar.nome}
                    onCancel={() => setModalDeletar(null)}
                    onConfirm={handleDeletarAluno}
                />
            )}
        </div>
    );
};

export default ListaAlunos;
