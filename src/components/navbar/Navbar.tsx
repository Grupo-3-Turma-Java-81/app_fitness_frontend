import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();

    const { handleLogout } = useContext(AuthContext)


    const irParaPlanos = () => {
        navigate("/home");
        setTimeout(() => {
            const anchor = document.getElementById("planos");
            if (anchor) anchor.scrollIntoView({ behavior: "smooth" });
        }, 100);
    };

    const irParaUnidades = () => {
        navigate("/home");
        setTimeout(() => {
            const anchor = document.getElementById("unidades");
            if (anchor) anchor.scrollIntoView({ behavior: "smooth" });
        }, 100);
    };

    const sair = () => {
        handleLogout()
        alert('O usuário foi desconectado com sucesso!')
        localStorage.clear();
        navigate("/");
    };

    const getNavbarType = () => {
        if (location.pathname === "/page-aluno") return "aluno";
        if (location.pathname === "/page-instrutor") return "instrutor";
        if (location.pathname.startsWith("/lista-")) return "instrutor";
        if (location.pathname.startsWith("/cadastro-funcionario")) return "instrutor";
        return "home";
    };

    const renderLinks = (tipo: string) => {
        switch (tipo) {
            case "home":
                return (
                    <>
                        <span onClick={irParaPlanos} className="cursor-pointer hover:text-[#D7F900]">Planos</span>
                        <span onClick={irParaUnidades} className="cursor-pointer hover:text-[#D7F900]">Unidades</span>
                        <Link to='/personais-trainers' className="cursor-pointer hover:text-[#D7F900]">Personais Trainers</Link>

                        <Link to='/sobre-nos' className="cursor-pointer hover:text-[#D7F900]">Sobre Nós</Link>
                        <Link to='/login'>
                            <button className="bg-black text-white px-4 py-1 rounded hover:text-[#D7F900]">
                                Entrar
                            </button>
                        </Link>
                    </>
                );

            case "aluno":
                return (
                    <>
                        <Link to="/page-aluno" className="cursor-pointer hover:text-[#D7F900]">Treinos</Link>
                        <button onClick={sair} className="cursor-pointer bg-black text-white px-4 py-1 rounded hover:text-[#D7F900]">
                            Sair
                        </button>
                    </>
                );

            case "instrutor":
                return (
                    <>
                        <Link to="/page-instrutor" className="cursor-pointer hover:text-[#D7F900]">Início</Link>

                        <Link to="/lista-alunos" className="cursor-pointer hover:text-[#D7F900]">Lista de alunos</Link>
                        <Link to="/lista-treinos" className="cursor-pointer hover:text-[#D7F900]">Lista de treinos</Link>
                        <Link to="/cadastro-funcionario" className="cursor-pointer hover:text-[#D7F900]">Cadastrar funcionário</Link>
                        <button onClick={sair} className="cursor-pointer bg-black text-white px-4 py-1 rounded hover:text-[#D7F900]">
                            Sair
                        </button>
                    </>
                );

            default:
                return null;
        }
    };

    const navbarType = getNavbarType();

    return (
        <div className="w-full">
            <div className="bg-[#D7F900] w-full h-[100px] flex flex-col items-center justify-center">
                <Link to="/">
                    <img
                        src="src/assets/logo-pulso/logo-pulso-letra-cinza.png"
                        alt="Logo Pulso"
                        className="h-40"
                    />
                </Link>
            </div>

            <div className="bg-white w-full py-4 flex justify-center">
                <div className="w-full max-w-6xl flex justify-end items-center px-4 gap-6 text-lg font-medium text-black">
                    {renderLinks(navbarType)}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
