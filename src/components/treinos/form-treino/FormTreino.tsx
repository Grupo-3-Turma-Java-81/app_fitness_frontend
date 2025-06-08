import React, {
    useEffect,
    useState,
    type ChangeEvent,
    useContext,
} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import type { Treino } from '../../../models/Treino';
//import { atualizar, cadastrar } from '../../../services/Service';

// import './FormFuncionario.css';
// import { AuthContext } from '../../../contexts/AuthContext';
// import type { Funcionario } from '../../../models/Funcionario';
// import { buscar, cadastrar, atualizar } from '../../../services/Service';

const FormTreino: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    // const { usuario } = useContext(AuthContext);
    // const token = usuario.token;

    // console.log(token);

    const [treino, setTreino] = useState<Treino>({
        id: 0,
        descricao: '',
        diaSemanaTreino: '',
        tipoTreino: '',
        status: '',
    });

    const [isLoading, setIsLoading] = useState(false);

    // useEffect(() => {
    //     if (id) {
    //         buscar(`/treinos/${id}`, setTreino, {
    //             headers: {
    //                 Authorization: usuario.token,
    //             },
    //         }).catch(() => alert('Erro ao carregar treino'));
    //     }
    // }, [id, token]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setTreino({
            ...treino,
            [e.target.name]: e.target.value,
        });
    }

    async function enviarFormulario(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        // try {
        //     if (id) {
        //         await atualizar(`/treinos/${id}`, treino, setTreino, {
        //             headers: {
        //                 // Authorization: usuario.token,
        //             },
        //         });
        //         alert('O treino foi atualizado!');
        //     } else {
        //         await cadastrar('/treinos', treino, setTreino, {
        //             headers: {
        //                 // Authorization: usuario.token,
        //             },
        //         });
        //         alert('Treino cadastrado com sucesso!');
        //     }
        //     navigate('/listar-treinos');
        // } catch (error) {
        //     alert('Erro ao cadastrar treino');
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
                        Cadastrar treino
                    </h2>
                </div>

                <div className="p-6">
                    <form onSubmit={enviarFormulario} className="space-y-4">

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm ">Descrição do treino</label>
                                <input
                                    type="text"
                                    name="descricao"
                                    value={treino.descricao}
                                    onChange={atualizarEstado}
                                    className="w-full px-4 py-2 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm  mb-2">Dia da semana</label>

                                <div className="flex flex-wrap gap-2">
                                    {["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"].map((dia) => (
                                        <button
                                            key={dia}
                                            type="button"
                                            onClick={() => setTreino({ ...treino, diaSemanaTreino: dia })}

                                            className={`w-10 h-10 rounded-full border text-sm font-medium transition 
                                                ${treino.diaSemanaTreino === dia
                                                    ? "bg-yellow-600 text-white border-yellow-200"
                                                    : "bg-white  border-slate-300 hover:bg-yellow-200"
                                                }`}
                                        >
                                            {dia}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* <div>
                                <label className="block text-sm ">Dia da semana</label>
                                <input
                                    type="text"
                                    name="diaSemanaTreino"
                                    value={treino.diaSemanaTreino}
                                    onChange={atualizarEstado}
                                    className="w-full px-4 py-2 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    required
                                />
                            </div> */}

                            <div className="col-span-2">
                                <label className="block text-sm ">Tipo de treino</label>
                                
                                <input
                                    type="text"
                                    name="tipoTreino"
                                    value={treino.tipoTreino}
                                    onChange={atualizarEstado}
                                    className="w-full px-4 py-2 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    required
                                />
                            </div>
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                className="w-full bg-yellow-300  font-semibold py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-300 disabled:opacity-50"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Salvando...' : id ? 'Atualizar' : 'Cadastrar'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormTreino;