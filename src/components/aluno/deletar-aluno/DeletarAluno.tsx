import { useEffect, useState, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../../../contexts/AuthContext'
import { buscar, deletar } from '../../../services/Service'
import type { Aluno } from '../../../models/Aluno'
import { ToastAlerta } from '../../../utils/ToastAlerta'

function DeletarAluno() {
    const navigate = useNavigate()
    
    const [aluno, setAluno] = useState<Aluno>({} as Aluno)
    
    const { id } = useParams<{ id: string }>()
    
    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado', 'info')
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        if (id) {
            buscar(`/alunos/${id}`, setAluno, {
                headers: { Authorization: token }
            })
        }
    }, [id, token])

    async function confirmarExclusao() {
        try {
            await deletar(`/alunos/deletar/${id}`, {
                headers: { Authorization: token }
            })
            ToastAlerta("Aluno deletado com sucesso!", "sucesso")
            navigate('/lista-alunos')
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            } else {
                ToastAlerta("Erro ao deletar aluno!", "erro")
            }
        }
    }

    function cancelar() {
        navigate('/lista-alunos')
    }

    return (
        <div className="container mx-auto flex flex-col items-center mt-8 bg-white p-6 rounded shadow max-w-md">
            <h1 className="text-2xl mb-4 font-bold text-center">Deseja realmente deletar o aluno?</h1>

            <div className="border border-gray-300 rounded p-4 w-full mb-4">
                <p><strong>Nome:</strong> {aluno.nome}</p>
                <p><strong>Endereço:</strong> {aluno.endereco}</p>
                <p><strong>Telefone:</strong> {aluno.telefone}</p>

            </div>

            <div className="flex gap-4">
                <button
                    onClick={confirmarExclusao}
                    className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded"
                >
                    Confirmar
                </button>
                <button
                    onClick={cancelar}
                    className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
                >
                    Cancelar
                </button>
            </div>
        </div>
    )
}

export default DeletarAluno
