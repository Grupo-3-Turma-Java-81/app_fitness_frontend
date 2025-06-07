function Footer() {
    const data = new Date().getFullYear();

    return (
        <>
            <style>
                {`
                    @keyframes blink {
                        0%, 100% {
                            filter: brightness(1);
                            opacity: 1;
                        }
                        50% {
                            filter: brightness(1.5);
                            opacity: 0.6;
                        }
                    }
                    .logo-blink {
                        animation: blink 2s infinite;
                    }
                `}
            </style>

            <footer className="bg-[#D7F900] text-[#313131] py-15 px-10">
                <div className="container mx-auto max-w-7xl">
                    <div className="flex flex-col md:flex-row justify-center md:items-start gap-20 text-center md:text-left">
                        
                        {/* Coluna 1: Logo maior e alinhada ao topo */}
                        <div className="flex justify-center md:justify-start mt-[-60px]">
                            <img
                                src="src/assets/logo/4.png"
                                alt="Logo Pulso"
                                className="w-60 h-auto logo-blink"
                            />
                        </div>

                        {/* Coluna 2: Pulso + descrição */}
                        <div className="flex flex-col gap-4 max-w-xs">
                            <p className="text-2xl font-bold">Pulso | &copy; {data}</p>
                            <p className="text-lg">
                                Pulso — O CT de musculação equipado, com estrutura de ponta,
                                equipamentos de primeira linha e liberdade total para treinar onde e quando quiser.
                            </p>
                        </div>

                        {/* Coluna 3: Redes sociais */}
                        <div className="flex flex-col gap-4 max-w-xs">
                            <p className="text-lg font-semibold">Nossas redes sociais</p>
                            <ul className="flex flex-col gap-2 items-center md:items-start">
                                {["Instagram", "Github", "Github/Code"].map((item, idx) => (
                                    <li key={idx} className="hover:text-[#E2E2E2] cursor-pointer">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Coluna 4: Links úteis */}
                        <div className="flex flex-col gap-4 max-w-xs">
                            <p className="text-lg font-semibold">Links Úteis</p>
                            <ul className="flex flex-col gap-2 items-center md:items-start">
                                {[
                                    "Home",
                                    "Sobre Nós",
                                    "Planos",
                                    "Unidades",
                                    "Personal Trainer",
                                    "Code³",
                                ].map((item, idx) => (
                                    <li key={idx} className="hover:text-[#E2E2E2] cursor-pointer">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
