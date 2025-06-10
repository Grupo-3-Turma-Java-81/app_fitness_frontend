import { useNavigate } from "react-router-dom";
import "./Login.css"; // importa fundoLogin e overlay

function EscolhaLogin() {
    const navigate = useNavigate();

    return (
        <>
            <div className="fundoLogin" />
            <div className="overlay" />

            <div className="absolute top-6 right-6">
                <div className="w-44 h-44 flex items-center justify-center">
                    <img
                        src="src/assets/logo-pulso/logo-pulso-letra-colorida.png"
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
