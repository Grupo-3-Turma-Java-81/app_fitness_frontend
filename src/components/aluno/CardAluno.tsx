import type { Aluno } from "../../models/Aluno";

interface Props {
    aluno: Aluno;
}

function CardAluno({ aluno }: Props) {
    return (
        <div className="bg-white flex justify-between items-center px-4 py-3 rounded-md mb-4 shadow-md w-full max-w-lg">
            <span className="text-lg font-medium">{aluno.nome}</span>
            <div className="flex gap-2">
                <button className="bg-black text-white px-3 py-1 rounded">Editar</button>
                <button className="bg-black text-white px-3 py-1 rounded">Deletar</button>
            </div>
        </div>
    );
}

export default CardAluno;