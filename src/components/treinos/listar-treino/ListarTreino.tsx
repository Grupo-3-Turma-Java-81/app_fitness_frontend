import { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { buscar, atualizar } from '../../../services/Service'
import { AuthContext } from '../../../contexts/AuthContext'
import { type Treino } from '../../../models/Treino'
import { type Aluno } from '../../../models/Aluno'
import { ToastAlerta } from '../../../utils/ToastAlerta'

export default function ListarTreinos() {
    const [treinos, setTreinos] = useState<Treino[]>([])
    const [aluno, setAluno] = useState<Aluno | null>(null)
    const { usuario, handleLogout } = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (!usuario.token) return

        buscar('/treinos/get-all', setTreinos, {
            headers: { Authorization: usuario.token }
        }).catch((error) => {
            console.error('Erro ao buscar treinos:', error)
            if (error.toString().includes('403')) handleLogout()
        })

        buscar('/alunos/get-all', (listaAlunos: Aluno[]) => {
            const alunoDoUsuario = listaAlunos.find(
                (a) => a.usuario?.id === usuario.id
            )
            if (alunoDoUsuario) setAluno(alunoDoUsuario)
        }, {
            headers: { Authorization: usuario.token }
        }).catch((error) => {
            console.error('Erro ao buscar alunos:', error)
            if (error.toString().includes('403')) handleLogout()
        })
    }, [usuario, handleLogout])

    async function associarTreinoAoAluno(treinoSelecionado: Treino) {
        if (!aluno) {
            ToastAlerta('Aluno não encontrado para o usuário logado', 'info')
            return
        }

        try {
            const treinoAtualizado = {
                ...treinoSelecionado,
                aluno: { id: aluno.id }
            }

            await atualizar('/treinos/atualizar', treinoAtualizado, () => { }, {
                headers: { Authorization: usuario.token }
            })

            alert(`Treino "${treinoSelecionado.descricao}" associado ao aluno ${aluno.nome} com sucesso!`)
        } catch (error) {
            ToastAlerta("Erro ao associar treino ao aluno!", "erro")
            console.error(error)
        }
    }

    return (
        <div className="max-w-4xl mx-auto p-4 bg-white rounded text-gray-900">
            <h2 className="text-2xl font-bold mb-4 text-center">Lista de Treinos</h2>

            {treinos.length === 0 ? (
                <p>Nenhum treino encontrado.</p>
            ) : (
                <ul className="space-y-3">
                    {treinos.map((treino) => (
                        <li
                            key={treino.id}
                            className="p-4 bg-gray-100 rounded shadow hover:bg-gray-200 transition flex justify-between items-center"
                        >
                            <div>
                                <p><strong>Descrição:</strong> {treino.descricao}</p>
                                <p><strong>Dia da Semana:</strong> {treino.diaSemanaTreino}</p>
                                <p><strong>Tipo:</strong> {treino.tipoTreino}</p>
                                <p><strong>Status:</strong> {treino.status}</p>
                                {treino.aluno && (
                                    <p className="text-sm text-green-700 font-medium">
                                        Associado a: {treino.aluno.nome}
                                    </p>
                                )}
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => navigate(`/editar-treino/${treino.id}`)}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
                                >
                                    Editar
                                </button>
                                <button
                                    onClick={() => navigate(`/deletar-treino/${treino.id}`)}
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
                                >
                                    Deletar
                                </button>
                                <button
                                    onClick={() => associarTreinoAoAluno(treino)}
                                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded"
                                    title="Associar treino ao aluno"
                                >
                                    +
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
