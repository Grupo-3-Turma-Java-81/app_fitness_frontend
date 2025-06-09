import { useState } from "react"

function PageAluno() {
    const [treinos] = useState([
        { id: 1, nome: "Treino A", detalhes: "Detalhes do treino A", aberto: false },
        { id: 2, nome: "Treino B", detalhes: "Detalhes do treino B", aberto: false },
        { id: 3, nome: "Treino C", detalhes: "Detalhes do treino C", aberto: false },
        { id: 4, nome: "Treino D", detalhes: "Detalhes do treino D", aberto: false }
    ])

    const [abertoIndex, setAbertoIndex] = useState<number | null>(null)

    const toggleTreino = (index: number) => {
        setAbertoIndex(prev => (prev === index ? null : index))
    }

    return (
        <div className="min-h-screen bg-white text-black">
            <div className="w-full max-w-7xl mx-auto px-4">

                <div className="bg-black text-white flex items-center px-8 py-4 gap-6 rounded-md mt-6">
                    <div className="bg-lime-400 text-black font-bold w-20 h-20 rounded-full flex items-center justify-center text-center text-sm">
                        Foto<br />de perfil
                    </div>
                    <h1 className="text-xl font-semibold">Olá Aluno</h1>
                </div>

                <section className="bg-gray-200 mt-6 py-8 px-4 rounded-md">
                    <h2 className="text-2xl font-bold text-center mb-6">Meus treinos</h2>

                    <div className="w-full max-w-md mx-auto flex flex-col gap-4">
                        {treinos.map((treino, index) => (
                            <div key={treino.id} className="bg-white rounded shadow p-4">
                                <div className="flex justify-between items-center">
                                    <span className="font-semibold">{treino.nome}</span>
                                    <button
                                        onClick={() => toggleTreino(index)}
                                        className="text-xl transform transition-transform hover:scale-110"
                                    >
                                        {abertoIndex === index ? "▲" : "▼"}
                                    </button>
                                </div>

                                {abertoIndex === index && (
                                    <div className="mt-2 text-sm text-gray-700">
                                        {treino.detalhes}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>

    )
}


export default PageAluno;
