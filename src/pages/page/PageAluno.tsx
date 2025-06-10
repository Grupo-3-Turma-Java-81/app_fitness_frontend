import { useEffect, useState, useContext } from 'react';
import { buscar } from '../../services/Service';
import { AuthContext } from '../../contexts/AuthContext';
import { type Treino } from '../../models/Treino';
import { type Aluno } from '../../models/Aluno';

export default function PageAluno() {
    const [treinos, setTreinos] = useState<Treino[]>([]);
    const [aluno, setAluno] = useState<Aluno | null>(null);
    const [treinoAberto, setTreinoAberto] = useState<number | null>(null);

    const { usuario, handleLogout } = useContext(AuthContext);

    useEffect(() => {
        if (!usuario.token) return;

        buscar('/treinos/get-all', setTreinos, {
            headers: { Authorization: usuario.token },
        }).catch((error) => {
            console.error('Erro ao buscar treinos:', error);
            if (error.toString().includes('403')) handleLogout();
        });

        buscar(
            '/alunos/get-all',
            (listaAlunos: Aluno[]) => {
                const alunoDoUsuario = listaAlunos.find(
                    (a) => a.usuario?.id === usuario.id
                );
                if (alunoDoUsuario) setAluno(alunoDoUsuario);
            },
            {
                headers: { Authorization: usuario.token },
            }
        ).catch((error) => {
            console.error('Erro ao buscar alunos:', error);
            if (error.toString().includes('403')) handleLogout();
        });
    }, [usuario, handleLogout]);

    const treinosDoAluno = treinos.filter(
        (treino) => treino.aluno?.id === aluno?.id
    );

    return (
        <div className="p-6 space-y-8">
            <div className="bg-black text-white flex items-center p-4 rounded">
                <span className="ml-8 text-2xl font-bold ">Olá aluno</span>
            </div>

            <div className="bg-gray-200 p-6 rounded shadow">
                <h2 className="text-2xl font-bold text-center mb-6">Meus treinos</h2>

                {treinosDoAluno.length === 0 ? (
                    <p className="text-center text-gray-600">
                        Você ainda não possui treinos cadastrados.
                    </p>
                ) : (
                    <ul className="flex flex-col items-center gap-4">
                        {treinosDoAluno.map((treino) => (
                            <li key={treino.id} className="w-full max-w-xl flex flex-col gap-2">

                                <div className="bg-white rounded flex justify-between items-center px-6 py-3 shadow">
                                    <span className="font-medium text-gray-800">
                                        {treino.descricao || 'Treino sem descrição'}
                                    </span>
                                    <button
                                        onClick={() =>
                                            setTreinoAberto(treinoAberto === treino.id ? null : treino.id!)
                                        }
                                        className="text-xl"
                                    >
                                        ↓
                                    </button>
                                </div>

                                {treinoAberto === treino.id && (
                                    <div className="bg-white rounded px-6 py-4 shadow border border-gray-300">
                                        <p className="mb-1">
                                            <strong>Descrição:</strong> {treino.descricao}
                                        </p>
                                        <p className="mb-1">
                                            <strong>Dia da Semana:</strong> {treino.diaSemanaTreino}
                                        </p>
                                        <p className="mb-1">
                                            <strong>Tipo:</strong> {treino.tipoTreino}
                                        </p>
                                        <p className="mb-1">
                                            <strong>Status:</strong> {treino.status}
                                        </p>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>

                )}
            </div>
        </div>
    );
}
