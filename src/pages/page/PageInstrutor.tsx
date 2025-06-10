import { useState, type FormEvent } from "react";

function PageInstrutor() {
    const [nome, setNome] = useState("");
    const [endereco, setEndereco] = useState("");
    const [telefone, setTelefone] = useState("");
    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");

    const [alunoTreino, setAlunoTreino] = useState("");
    const [descricao, setDescricao] = useState("");
    const [diaSemana, setDiaSemana] = useState("");
    const [tipoTreino, setTipoTreino] = useState("");

    const calcularIMC = () => {
        const alturaM = Number(altura) / 100;
        const imc = Number(peso) / (alturaM * alturaM);
        return isNaN(imc) ? "--" : imc.toFixed(2);
    };

    const classificarIMC = () => {
        const imc = Number(calcularIMC());
        if (!imc || isNaN(imc)) return "";
        if (imc < 18.5) return "ABAIXO DO PESO";
        if (imc < 25) return "NORMAL";
        if (imc < 30) return "SOBREPESO";
        return "OBESIDADE";
    };

    const cadastrarAluno = (e: FormEvent) => {
        e.preventDefault();
        alert("Aluno cadastrado!");
    };

    const cadastrarTreino = (e: FormEvent) => {
        e.preventDefault();
        alert("Treino cadastrado!");
    };

    return (
        <div className="p-10 space-y-10">
            <div className="bg-black text-white p-4 flex items-center rounded">
                <span className="ml-4 font-medium">Olá Treinador</span>
            </div>

            <form
                onSubmit={cadastrarAluno}
                className="bg-gray-200 rounded p-6 flex flex-col lg:flex-row justify-between gap-6"
            >

                <div className="w-full lg:w-2/3 space-y-4">
                    <h2 className="text-xl font-bold text-black mb-2">
                        Cadastrar novo aluno
                    </h2>
                    
                    <div className="flex flex-col">
                        <label className="text-gray-700 mb-1">Nome</label>
                        <input
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            className="p-2 rounded bg-white"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-gray-700 mb-1">Endereço</label>
                        <input
                            value={endereco}
                            onChange={(e) => setEndereco(e.target.value)}
                            className="p-2 rounded bg-white"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-gray-700 mb-1">Telefone</label>
                        <input
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                            className="p-2 rounded bg-white"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-gray-700 mb-1">Peso</label>
                        <input
                            type="number"
                            value={peso}
                            onChange={(e) => setPeso(e.target.value)}
                            className="p-2 rounded bg-white"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-gray-700 mb-1">Altura</label>
                        <input
                            type="number"
                            value={altura}
                            onChange={(e) => setAltura(e.target.value)}
                            className="p-2 rounded bg-white"
                            required
                        />
                    </div>
                </div>

                <div className="bg-white p-4 rounded shadow w-full lg:w-1/3 flex flex-col items-center justify-center">
                    <h3 className="font-semibold text-gray-800 mb-4">Cálculo do IMC</h3>
                    <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold text-gray-700 mb-2">
                        {calcularIMC()}
                    </div>
                    <p className="text-sm text-gray-600 mb-1">
                        Aluno {nome || "[nome]"} está em
                    </p>
                    <p className="font-bold text-black mb-4">{classificarIMC()}</p>
                    <button
                        type="submit"
                        className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
                    >
                        Cadastrar
                    </button>
                </div>
            </form>

            <form
                onSubmit={cadastrarTreino}
                className="bg-gray-200 rounded p-6 space-y-4"
            >
                <h2 className="text-xl font-bold text-black mb-4">
                    Preparar um novo treino
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                        <label className="text-gray-700 mb-1">Aluno</label>
                        <input
                            value={alunoTreino}
                            onChange={(e) => setAlunoTreino(e.target.value)}
                            className="p-2 rounded bg-white"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-gray-700 mb-1">Dias da Semana</label>
                        <select
                            value={diaSemana}
                            onChange={(e) => setDiaSemana(e.target.value)}
                            className="p-2 rounded bg-white"
                            required
                        >
                            <option value="">Selecione</option>
                            <option value="SegundaQuarta">Segunda | Quarta</option>
                            <option value="TerçaQuinta">Terça | Quinta</option>
                            <option value="SextaSabado">Sexta | Sábado</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-gray-700 mb-1">Descrição</label>
                        <input
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                            className="p-2 rounded bg-white"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-gray-700 mb-1">Tipo de treino</label>
                        <input
                            value={tipoTreino}
                            onChange={(e) => setTipoTreino(e.target.value)}
                            className="p-2 rounded bg-white"
                            required
                        />
                    </div>
                </div>

                <div className="mt-4">
                    <button
                        type="submit"
                        className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
                    >
                        Feito
                    </button>
                </div>
            </form>
        </div>
    );
}

export default PageInstrutor;
