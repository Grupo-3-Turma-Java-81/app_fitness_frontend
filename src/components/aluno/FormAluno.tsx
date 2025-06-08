import React, {
    useEffect,
    useState,
    type ChangeEvent,
    useContext,
} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import type { Aluno } from '../../models/Aluno';
// import { AuthContext } from '../../../contexts/AuthContext';
// import { buscar, cadastrar, atualizar } from '../../../services/Service';

const FormAluno: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    // const { usuario } = useContext(AuthContext);
    // const token = usuario.token;

    // console.log(token);

    const [aluno, setAluno] = useState<Aluno>({
        id: 0,
        nome: '',
        endereco: '',
        telefone: '',
        peso: 0,
        altura: 0,
    });

    const [isLoading, setIsLoading] = useState(false);

    // useEffect(() => {
    //     if (id) {
    //         buscar(`/alunos/${id}`, setAluno, {
    //             headers: {
    //                 Authorization: usuario.token,
    //             },
    //         }).catch(() => alert('Erro ao carregar aluno'));
    //     }
    // }, [id, token]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setAluno({
            ...aluno,
            [e.target.name]: e.target.value,
        });
    }

    async function enviarFormulario(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        // try {
        //     if (id) {
        //         await atualizar(`/alunos/${id}`, aluno, setAluno, {
        //             headers: {
        //                 // Authorization: usuario.token,
        //             },
        //         });
        //         alert('O aluno foi atualizado!');
        //     } else {
        //         await cadastrar('/alunos', aluno, setAluno, {
        //             headers: {
        //                 // Authorization: usuario.token,
        //             },
        //         });
        //         alert('Aluno cadastrado com sucesso!');
        //     }
        //     navigate('/listar-alunos');
        // } catch (error) {
        //     alert('Erro ao cadastrar aluno');
        //     console.error(error);
        // } finally {
        //     setIsLoading(false);
        // }
    }

    return (
        <div className="max-w-4xl mx-auto mb-6">
            <div className="bg-white border rounded-lg shadow-sm overflow-hidden">
                <div className="grid grid-cols-7 gap-4 px-4 py-2 text-sm font-semibold bg-yellow-300 items-center text-center">
                    <h2 className="col-span-7 text-center text-lg font-semibold ">
                        Cadastrar novo aluno
                    </h2>
                </div>

                <div className="p-6">
                    <div className="grid grid-cols-2 gap-8">
                        {/* Form Section */}
                        <div>
                            <form onSubmit={enviarFormulario} className="space-y-4">
                                <div>
                                    <label className="block text-sm">Matrícula do aluno</label>
                                    <input
                                        type="text"
                                        name="nome"
                                        value={aluno.id}
                                        onChange={atualizarEstado}
                                        className="w-full px-4 py-2 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm">Nome do aluno</label>
                                    <input
                                        type="text"
                                        name="nome"
                                        value={aluno.nome}
                                        onChange={atualizarEstado}
                                        className="w-full px-4 py-2 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm">Endereço</label>
                                    <input
                                        type="text"
                                        name="endereco"
                                        value={aluno.endereco}
                                        onChange={atualizarEstado}
                                        className="w-full px-4 py-2 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm">Telefone</label>
                                    <input
                                        type="text"
                                        name="telefone"
                                        value={aluno.telefone}
                                        onChange={atualizarEstado}
                                        className="w-full px-4 py-2 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm">Peso</label>
                                    <input
                                        type="number"
                                        name="peso"
                                        value={aluno.peso}
                                        onChange={atualizarEstado}
                                        className="w-full px-4 py-2 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm">Altura</label>
                                    <input
                                        type="number"
                                        name="altura"
                                        value={aluno.altura}
                                        onChange={atualizarEstado}
                                        className="w-full px-4 py-2 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        required
                                    />
                                </div>

                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        className="w-full bg-yellow-300 font-semibold py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-300 disabled:opacity-50"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? 'Salvando...' : id ? 'Atualizar' : 'Cadastrar'}
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* IMC Display Section */}
                        <div className="flex flex-col items-center justify-center">
                            <div className="text-center mb-4">
                                <h3 className="text-lg font-semibold mb-2">Cálculo do IMC</h3>
                                <div className="w-48 h-48 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                                    <div className="text-center">
                                        <p className="text-sm mb-1">Valor do IMC</p>
                                        <p className="text-3xl font-bold">25.0</p>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <p className="text-sm text-gray-600">Aluno está em</p>
                                    <p className="text-lg font-semibold">SOBREPESO</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormAluno;