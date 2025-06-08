import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
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
                        <Link to='/planos' className="cursor-pointer hover:text-[#D7F900]">Planos</Link>
                        <Link to='/unidades' className="cursor-pointer hover:text-[#D7F900]">Unidades</Link>
                        <Link to='/sobre-nos' className="cursor-pointer hover:text-[#D7F900]">Sobre Nós</Link>
                        <Link to='/login'>
                            <button className="bg-black text-white px-4 py-1 rounded hover:text-[#D7F900]">
                                Entrar
                            </button>
                        </Link>

                    </div>
                </div>
            </div>
        </>

    );
}

export default Navbar;
