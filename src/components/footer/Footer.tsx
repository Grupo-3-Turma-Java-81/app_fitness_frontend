import { useNavigate } from "react-router-dom";

import img1 from "../../assets/logo-pulso/logo-pulso-letra-colorida.png"

function Footer() {
    const data = new Date().getFullYear();

    const navigate = useNavigate();

    function irParaPlanos() {
        navigate("/home");

        setTimeout(() => {
            const anchor = document.getElementById("planos");
            if (anchor) {
                anchor.scrollIntoView({ behavior: "smooth" });
            }
        }, 100);
    }

    function irParaUnidades() {
        navigate("/home");

        setTimeout(() => {
            const anchor = document.getElementById("unidades");
            if (anchor) {
                anchor.scrollIntoView({ behavior: "smooth" });
            }
        }, 100);
    }

    return (
        <footer className="bg-black text-white py-10 px-6">
            <div className="mx-auto w-full max-w-[1400px] flex flex-col md:flex-row justify-between items-start gap-10 text-left">

                <div className="w-full md:w-1/4">
                    <img
                        src={img1}
                        alt="Logo Pulso"
                        className="h-40 w-auto logo-blink"
                    />
                </div>

                <div className="w-full md:w-1/4">
                    <p className="text-2xl font-bold">Pulso | &copy; {data}</p>

                    <p className="font-bold text-lg mb-2">
                        Pulso — O CT de musculação equipado, com estrutura de ponta,
                        equipamentos de primeira linha e liberdade total para treinar onde e quando quiser.
                    </p>
                </div>

                <div className="w-full md:w-1/4">
                    <p className="font-bold text-sm mb-2">Nossas redes</p>
                    <ul className="space-y-1">
                        <li className="hover:text-[#D7F900] cursor-pointer">
                            <a href="https://www.instagram.com/generationbrasil/p/DHJ98FCvJdo/" target="_blank">
                                Instagram
                            </a>
                        </li>
                        
                        <li className="hover:text-[#D7F900] cursor-pointer">
                            <a href="https://github.com/Grupo-3-Turma-Java-81" target="_blank">
                                Code³
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="w-full md:w-1/4">
                    <p className="font-bold text-sm mb-2">Links Úteis</p>
                    <ul className="space-y-1">
                        <li className="hover:text-[#D7F900] cursor-pointer">
                            <a href="/sobre-nos">Sobre Nós</a>
                        </li>
                        <li className="hover:text-[#D7F900] cursor-pointer">
                            <a onClick={irParaPlanos}>Planos</a>
                        </li>
                        <li className="hover:text-[#D7F900] cursor-pointer">
                            <a href="/personais-trainers">Personais Trainers</a>
                        </li>
                        <li className="hover:text-[#D7F900] cursor-pointer">
                            <a onClick={irParaUnidades}>Unidades</a>
                        </li>
                    </ul>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
