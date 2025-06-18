import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState, type ChangeEvent } from "react";

import type { Treino } from "../../models/Treino";
import { AuthContext } from "../../contexts/AuthContext";
import { atualizar, buscar, cadastrar } from "../../services/Service";

function PageInstrutor() {
    const [treino, setTreino] = useState<Treino>({} as Treino);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado');
            navigate('/login');
        }
    }, [token]);

    useEffect(() => {
        if (id !== undefined) {
            buscar(`/treinos/${id}`, setTreino, {
                headers: { Authorization: token }
            });
        }
    }, [id]);


    function atualizarEstado(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        setTreino({
            ...treino,
            [e.target.name]: e.target.value
        });
    }

    async function enviarTreino(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        try {
            if (id !== undefined) {
                await atualizar("/treinos/atualizar", treino, setTreino, {
                    headers: { Authorization: token }
                });
                alert("Treino atualizado com sucesso!");
            } else {
                await cadastrar("/treinos/criar", treino, setTreino, {
                    headers: { Authorization: token }
                });
                alert("Treino cadastrado com sucesso!");
            }
            navigate('/lista-treinos');
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout();
            } else {
                alert("Erro ao salvar o treino");
            }
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="p-10 space-y-10">
            <div className="bg-black text-white p-4 flex items-center rounded">
                <span className="ml-8 font-extrabold text-2xl">Olá treinador</span>
            </div>

            <div className="bg-gray-200 p-6 rounded space-y-4">
                <h2 className="text-2xl font-extrabold">
                    {id ? "Atualizar treino" : "Preparar um novo treino"}
                </h2>

                <form onSubmit={enviarTreino} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col md:col-span-2">
                        <label htmlFor="descricao" className="text-[20px] font-medium text-gray-700">Descrição</label>
                        <input
                            type="text"
                            name="descricao"
                            id="descricao"
                            value={treino.descricao}
                            onChange={atualizarEstado}
                            className="p-2 rounded bg-white"
                            required
                        />
                    </div>

                    <div className="flex flex-col md:col-span-2">
                        <label htmlFor="tipoTreino" className="text-[20px] font-medium text-gray-700">Tipo de treino</label>
                        <input
                            type="text"
                            name="tipoTreino"
                            id="tipoTreino"
                            value={treino.tipoTreino}
                            onChange={atualizarEstado}
                            className="p-2 rounded bg-white"
                            required
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="diaSemanaTreino" className="text-[20px] font-medium text-gray-700">Dias da Semana</label>
                        <select
                            name="diaSemanaTreino"
                            id="diaSemanaTreino"
                            value={treino.diaSemanaTreino}
                            onChange={atualizarEstado}
                            className="p-2 rounded bg-white"
                            required
                        >
                            <option value="">Selecione</option>
                            <option value="Segunda">Segunda</option>
                            <option value="Terça">Terça</option>
                            <option value="Quarta">Quarta</option>
                            <option value="Quinta">Quinta</option>
                            <option value="Sexta">Sexta</option>
                            <option value="Sábado">Sábado</option>
                            <option value="Domingo">Domingo</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="status" className="text-[20px] font-medium text-gray-700">Status</label>
                        <select
                            name="status"
                            id="status"
                            value={treino.status}
                            onChange={atualizarEstado}
                            className="p-2 rounded bg-white"
                            required
                        >
                            <option value="">Selecione</option>
                            <option value="COMPLETO">Completo</option>
                            <option value="INCOMPLETO">Incompleto</option>
                        </select>
                    </div>

                    <div className="md:col-span-2">
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
                        >
                            {isLoading ? "Salvando..." : "Feito"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default PageInstrutor;
