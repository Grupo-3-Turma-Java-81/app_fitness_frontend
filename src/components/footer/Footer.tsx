function Footer() {
    const data = new Date().getFullYear();

    return (
        <footer className="bg-black text-white py-10 px-6">
            <div className="mx-auto w-full max-w-[1400px] flex flex-col md:flex-row justify-between items-start gap-10 text-left">

                <div className="w-full md:w-1/4">
                    <img
                        src="src/assets/logo-pulso/logo-pulso-letra-colorida.png"
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
                        <li className="hover:text-[#D7F900] cursor-pointer">Instagram</li>
                        <li className="hover:text-[#D7F900] cursor-pointer">Code³</li>
                    </ul>
                </div>

                <div className="w-full md:w-1/4">
                    <p className="font-bold text-sm mb-2">Links Úteis</p>
                    <ul className="space-y-1">
                        <li className="hover:text-[#D7F900] cursor-pointer">Sobre Nós</li>
                        <li className="hover:text-[#D7F900] cursor-pointer">Planos</li>
                        <li className="hover:text-[#D7F900] cursor-pointer">Personais Trainers</li>
                        <li className="hover:text-[#D7F900] cursor-pointer">Unidades</li>
                    </ul>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
