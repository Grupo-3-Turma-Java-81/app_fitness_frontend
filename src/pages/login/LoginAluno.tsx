import { RotatingLines } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState, type ChangeEvent } from "react";

import "./Login.css";
import { AuthContext } from "../../contexts/AuthContext";
import type UsuarioLogin from "../../models/UsuarioLogin";

import img1 from "../../assets/logo-pulso/logo-pulso-letra-colorida.png";

function LoginAluno() {
  const navigate = useNavigate();

  const { usuario, handleLogin, isLoading } = useContext(AuthContext);

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  );

  useEffect(() => {
    if (usuario.token !== "") {
      navigate("/page-aluno");
    }
  }, [usuario]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value,
    });
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(usuarioLogin);
  }

  return (
    <>
      <div className="fundoLogin" />
      <div className="overlay" />

      <div className="absolute top-6 left-0 right-0 px-6 flex justify-between items-center z-50">
        <button
          onClick={() => navigate("/login")}
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

      <div className="flex justify-center items-center min-h-screen">
        <form
          className="flex justify-center items-center flex-col w-full max-w-md px-8 py-6 gap-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg"
          onSubmit={login}
        >

          <h2 className="text-slate-900 text-5xl font-bold">Entrar</h2>
          <div className="flex flex-col w-full">

            <label htmlFor="usuario" className="text-slate-700 mb-1 text-left">
              E-mail
            </label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              className="border-2 border-slate-700 rounded-md p-2 focus:outline-none focus:ring-0 transition-all duration-300"
              value={usuarioLogin.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="senha" className="text-slate-700 mb-1 text-left">
              Senha
            </label>
            <input
              type="password"
              id="senha"
              name="senha"
              className="border-2 border-slate-700 rounded-md p-2 focus:outline-none focus:ring-0 transition-all duration-300"
              value={usuarioLogin.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>

          <button
            type="submit"
            style={{
              backgroundColor: "#B1C803",
              outline: "none",
              border: "none",
            }}
            className="rounded flex justify-center text-black w-1/2 py-2.5 mt-2 transition-all duration-300 hover:shadow-lg hover:shadow-[#11C5D9]/50 focus:outline-none focus:ring-0 active:outline-none"
          >
            {isLoading ? (
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              />
            ) : (
              <span className="font-semibold">Entrar</span>
            )}
          </button>

          <p className="text-slate-700 mt-8">
            Ainda não tem uma conta?{" "}
            <Link
              to="/cadastro-aluno"
              style={{ color: "#0F1300" }}
              className="hover:underline font-semibold transition-all duration-300"
            >
              Cadastre-se
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default LoginAluno;