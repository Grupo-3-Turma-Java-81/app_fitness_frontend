import { useNavigate } from "react-router-dom";
import "./Login.css";

import img1 from "../../assets/logo-pulso/logo-pulso-letra-colorida.png";

function EscolhaLogin() {
    const navigate = useNavigate();

    return (
        <>
            <div className="fundoLogin" />
            <div className="overlay" />

            <div className="absolute top-6 left-0 right-0 px-6 flex justify-between items-center z-50">
                <button
                    onClick={() => navigate("/home")}
                    className="ml-28 text-white text-4xl font-bold hover:scale-110 transition-transform duration-200"
                    aria-label="Voltar"
                >
                    ←
                </button>

                <div className="w-44 h-44 flex items-center justify-center">
                    <img
                        src={img1}
                        alt="Logo Pulso"
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>

            <div className="flex justify-center items-center min-h-screen relative z-10">
                <div className="flex flex-col justify-center items-center w-full max-w-md px-8 py-6 gap-6 bg-white/80 backdrop-blur-sm rounded-lg shadow-xl">
                    <h1 className="text-slate-900 text-4xl font-bold mb-4">LOGIN</h1>

                    <button
                        onClick={() => navigate("/login-funcionario")}
                        style={{
                            backgroundColor: "#D7F205",
                            border: "none",
                        }}
                        className="rounded flex justify-between items-center text-black w-full py-3 px-4 text-md font-semibold hover:shadow-lg hover:shadow-[#11C5D9]/50 transition-all duration-300"
                    >
                        <span>Login para funcionários</span>
                        <span className="text-xl">→</span>
                    </button>

                    <button
                        onClick={() => navigate("/login-aluno")}
                        style={{
                            backgroundColor: "#D7F205",
                            border: "none",
                        }}
                        className="rounded flex justify-between items-center text-black w-full py-3 px-4 text-md font-semibold hover:shadow-lg hover:shadow-[#11C5D9]/50 transition-all duration-300"
                    >
                        <span>Cadastro e login para alunos</span>
                        <span className="text-xl">→</span>
                    </button>
                </div>
            </div>
        </>
    );
}

export default EscolhaLogin;
