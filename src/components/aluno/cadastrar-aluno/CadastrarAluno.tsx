import { type ChangeEvent, useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../../../contexts/AuthContext'
import { buscar, cadastrar, atualizar } from '../../../services/Service'
import { type Aluno } from '../../../models/Aluno'

function FormAluno() {
    const navigate = useNavigate()
    const { id } = useParams()

    const { usuario } = useContext(AuthContext);
    const token = usuario.token;

    const [aluno, setAluno] = useState<Aluno>({
        nome: '',
        endereco: '',
        telefone: '',
        peso: 0,
        altura: 0,
        usuario: undefined,
    });

    const calcularIMC = () => {
        const alturaM = Number(aluno.altura) / 100;
        const imc = Number(aluno.peso) / (alturaM * alturaM);
        return isNaN(imc) ? "0" : imc.toFixed(2);
    };

    const classificarIMC = () => {
        const imc = Number(calcularIMC());
        if (!imc || isNaN(imc)) return "";
        if (imc < 18.5) return "ABAIXO DO PESO";
        if (imc < 25) return "NORMAL";
        if (imc < 30) return "SOBREPESO";
        return "OBESIDADE";
    };

    useEffect(() => {
        if (id !== undefined) {
            buscar(`/alunos/${id}`, setAluno, {
                headers: { Authorization: usuario.token }
            })
        }
    }, [id, usuario.token]);

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado');
            navigate('/login');
        }
    }, [token]);


    function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
        setAluno({
            ...aluno,
            [e.target.name]: e.target.value,
        })
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        try {
            const alunoParaEnviar = {
                ...aluno,
                treinos: [{ id: 5 }],
                usuario: { id: usuario.id }
            }

            if (id !== undefined) {
                await atualizar("/alunos/atualizar", alunoParaEnviar, setAluno, {
                    headers: { Authorization: usuario.token }
                });
                alert("Aluno atualizado com sucesso!");
            } else {
                await cadastrar("/alunos/criar", alunoParaEnviar, setAluno, {
                    headers: { Authorization: usuario.token }
                });
                alert("Aluno cadastrado com sucesso!");
            }

            navigate('/lista-alunos')
        } catch (error) {
            alert('Erro ao salvar o aluno. Verifique os dados.')
        }
    }

    return (
        <div className="p-10 space-y-10">

            <form
                onSubmit={handleSubmit}
                className="bg-gray-200 rounded p-6 flex flex-col lg:flex-row justify-between gap-6"
            >
                <div className="flex flex-col gap-4 flex-1">
                    <h2 className="text-3xl font-extrabold">
                        {id ? "Atualizar aluno" : "Cadastrar um novo aluno"}
                    </h2>

                    <div className="flex flex-col">
                        <label className="text-gray-700 mb-1">Nome</label>
                        <input
                            type="text"
                            name="nome"
                            placeholder="Nome"
                            value={aluno.nome}
                            onChange={handleInputChange}
                            className="p-2 rounded bg-white text-gray-900 border border-gray-300"
                            required
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-gray-700 mb-1">Endereço</label>
                        <input
                            type="text"
                            name="endereco"
                            placeholder="Endereço"
                            value={aluno.endereco}
                            onChange={handleInputChange}
                            className="p-2 rounded bg-white text-gray-900 border border-gray-300"
                            required
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-gray-700 mb-1">Telefone</label>
                        <input
                            type="tel"
                            name="telefone"
                            placeholder="Telefone"
                            value={aluno.telefone}
                            onChange={handleInputChange}
                            className="p-2 rounded bg-white text-gray-900 border border-gray-300"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col">
                            <label className="text-gray-700 mb-1">Peso</label>
                            <input
                                type="text"
                                name="peso"
                                placeholder="Peso (kg)"
                                value={aluno.peso}
                                onChange={handleInputChange}
                                className="p-2 rounded bg-white text-gray-900 border border-gray-300 no-spinner"
                                required
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-gray-700 mb-1">Altura</label>
                            <input
                                type="text"
                                name="altura"
                                placeholder="Altura (m)"
                                value={aluno.altura}
                                onChange={handleInputChange}
                                className="p-2 rounded bg-white text-gray-900 border border-gray-300 no-spinner"
                                required
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-32 bg-black hover:bg-gray-800 text-white py-2 px-4 rounded self-start"
                    >
                        {id ? 'Atualizar' : 'Cadastrar'}
                    </button>
                </div>

                <div className="bg-white p-4 rounded shadow w-full lg:w-1/3 flex flex-col items-center justify-center">
                    <h3 className="font-extrabold text-gray-800 text-[30px] mb-4">Cálculo do IMC</h3>
                    <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold text-gray-700 mb-2">
                        {calcularIMC()}
                    </div>
                    <p className="text-sm text-gray-600 text-[20px] font-medium mb-1">
                        Aluno {aluno.nome || "--"} está em
                    </p>
                    <p className="font-bold text-black mb-4">{classificarIMC()}</p>
                </div>
            </form>
        </div>
    );
}

export default FormAluno
