import { useNavigate } from "react-router-dom";
import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";

import "./Cadastro.css";
import type { Usuario } from "../../models/Usuario";
import { cadastrarUsuario } from "../../services/Service";
import img1 from "../../assets/logo-pulso/logo-pulso-letra-colorida.png"

function Cadastro() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [confirmaSenha, setConfirmaSenha] = useState<string>("");

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
    tipoUsuario: 'Aluno'
  });

  useEffect(() => {
    if (usuario.id !== 0) {
      navigate('/login-aluno');
    }
  }, [usuario]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    });
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value);
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
      setIsLoading(true);

      try {
        const { id, ...usuarioSemId } = usuario;
        await cadastrarUsuario(`/usuarios/cadastrar`, usuarioSemId, setUsuario);

        alert('Usuário cadastrado com sucesso!');
      } catch (error) {
        alert('Erro ao cadastrar o usuário!');
      }

      setIsLoading(false);
    } else {
      alert('Dados do usuário inconsistentes! Verifique as informações do cadastro.');

      setUsuario({ ...usuario, senha: '' });
      setConfirmaSenha('');
    }
  }

  function retornarLogin() {
    navigate('/login-aluno');
  }

  return (
    <>
      <div className="fundoCadastro" />
      <div className="overlay" />
      
      <div className="absolute top-6 right-6">
        <div className="w-54 h-54 flex items-center justify-center">
          <img
            src={img1}
            alt="Logo Pulso"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="flex justify-center items-center min-h-screen">
        <form
          onSubmit={cadastrarNovoUsuario}
          className="flex justify-center items-center flex-col w-full max-w-md px-8 py-6 gap-3 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg"
        >
          <h2 className="text-slate-900 text-5xl text-center font-bold mb-4">Cadastra-se</h2>

          <div className="flex flex-col w-full">
            <label htmlFor="nome" className="text-slate-600 mb-1 text-left">
              Nome
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={usuario.nome}
              onChange={atualizarEstado}
              className="border-2 border-slate-500 rounded-md p-2"
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="usuario" className="text-slate-600 mb-1 text-left">
              E-mail
            </label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              value={usuario.usuario}
              onChange={atualizarEstado}
              className="border-2 border-slate-500 rounded-md p-2"
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="tipoUsuario" className="text-slate-600 mb-1 text-left">
              Tipo de Usuário
            </label>
            <input
              type="text"
              id="tipoUsuario"
              name="tipoUsuario"
              value={usuario.tipoUsuario}
              readOnly
              disabled
              className="border-2 border-slate-500 rounded-md p-2 bg-gray-200 text-gray-600 font-extrabold cursor-not-allowed"
            />
          </div>


          <div className="flex flex-col w-full">
            <label htmlFor="senha" className="text-slate-600 mb-1 text-left">
              Senha
            </label>
            <input
              type="password"
              id="senha"
              name="senha"
              value={usuario.senha}
              onChange={atualizarEstado}
              className="border-2 border-slate-500 rounded-md p-2"
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="confirmarSenha" className="text-slate-600 mb-1 text-left">
              Confirmar Senha
            </label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              value={confirmaSenha}
              onChange={handleConfirmarSenha}
              className="border-2 border-slate-500 rounded-md p-2"
            />
          </div>

          <div className="flex justify-around w-full gap-8 mt-2">
            <button
              type="button"
              style={{
                backgroundColor: "#808080",
                outline: "none",
                border: "none",
              }}
              className="rounded text-white w-1/2 py-2.5 transition-all duration-300 hover:shadow-lg hover:shadow-[#81868C]/50"
              onClick={retornarLogin}
            >
              Cancelar
            </button>

            <button
              type="submit"
              style={{
                backgroundColor: "#B1C803",
                outline: "none",
                border: "none",
              }}
              className="rounded text-white w-1/2 py-2.5 transition-all duration-300 hover:shadow-lg hover:shadow-[#11C5D9]/50 flex justify-center"
            >
              {isLoading ? "Cadastrando..." : "Cadastrar"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Cadastro;