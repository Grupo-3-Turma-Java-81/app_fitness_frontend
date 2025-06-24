import  { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../../../contexts/AuthContext'
import { buscar, atualizar } from '../../../services/Service'
import { type Treino } from '../../../models/Treino'
import type { Aluno } from '../../../models/Aluno'
import { ToastAlerta } from '../../../utils/ToastAlerta'


interface AdicionarTreinoProps {
    treino: Treino
    onSuccess?: () => void
}

export default function AdicionarTreino({ treino, onSuccess }: AdicionarTreinoProps) {
    const { usuario } = useContext(AuthContext)
    const [aluno, setAluno] = useState<Aluno | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        buscar(`/alunos/usuario/${usuario.id}`, setAluno, {
            headers: { Authorization: usuario.token }
        }).catch(() => {
            setError('Erro ao buscar aluno')
        })
    }, [usuario])

    async function handleAdicionar() {
        if (!aluno) return
        setLoading(true)
        setError('')

        try {
            const alunoAtualizado = { ...aluno, treino }
            await atualizar('/atualizar', alunoAtualizado, setAluno, {
                headers: { Authorization: usuario.token }
            })
            if (onSuccess) onSuccess()
            ToastAlerta("Treino adicionado ao aluno com sucesso!", "sucesso")
        } catch {
            ToastAlerta("Erro ao atualizar o aluno!", "erro")
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            {error && <p className="text-red-600">{error}</p>}
            <button
                disabled={loading}
                onClick={handleAdicionar}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-3 rounded"
                title="Adicionar treino ao aluno"
            >
                {loading ? 'Adicionando...' : '+'}
            </button>
        </>
    )
}