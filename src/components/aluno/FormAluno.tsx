import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import type { Treino } from "../../models/Treino";
import { buscar, cadastrar } from "../../services/Service";

export default function FormAluno() {

    const [aluno, setAluno] = useState<{
        id: number | null;
        nome: string;
        endereco: string;
        telefone: string;
        peso: number;
        altura: number;
        treino: Treino | null;
    }>({
        id: null,
        nome: '',
        endereco: '',
        telefone: '',
        peso: 0,
        altura: 0,
        treino: null
    });

    const [treinos, setTreinos] = useState<Treino[]>([]);

    const navigate = useNavigate();

    const usuarioToken = localStorage.getItem("usuarioToken");

    useEffect(() => {
        if (usuarioToken) {
            buscar(`/alunos/treinos/${aluno.id}`, setTreinos, {
                headers: { Authorization: `Bearer ${usuarioToken}` }
            });
        }
    }, [aluno.id, usuarioToken]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const alunoParaEnviar = {
            ...aluno,
            treino: aluno.treino, 
        };

        try {
            await cadastrar("/alunos/criar", alunoParaEnviar, setAluno, {
                headers: { Authorization: `Bearer ${usuarioToken}` }
            });

            navigate("/page-instrutor");
        } catch (error) {
            console.error("Erro ao cadastrar aluno:", error);
        }
    };

    return (
        <div>
            <h1>Cadastrar Aluno</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="nome"
                    value={aluno.nome}
                    onChange={(e) => setAluno({ ...aluno, nome: e.target.value })}
                />
                <input
                    type="text"
                    name="endereco"
                    value={aluno.endereco}
                    onChange={(e) => setAluno({ ...aluno, endereco: e.target.value })}
                />

                <h2>Meus Treinos</h2>
                {treinos.map((treino, index) => (
                    <div key={treino.id}>
                        <p>{treino.descricao}</p>

                        <input
                            type="radio"
                            checked={aluno.treino?.id === treino.id}
                            onChange={() => setAluno({ ...aluno, treino: treino })}
                        />
                        <label>{treino.tipoTreino}</label>
                    </div>
                ))}

                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
}
