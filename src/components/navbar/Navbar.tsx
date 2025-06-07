function Navbar() {
    return (
        <div className="w-full bg-[#313131] text-[#D7F900] py-4 flex justify-center">
            <div className="w-full max-w-6xl flex justify-between items-center px-4">
                
                {/* Logo apenas */}
                <div className="flex items-center gap-3">
                    <img 
                        src="src/assets/logo/1 (1).webp" 
                        alt="Logo Pulso" 
                        className="w-12 h-auto"
                    />
                </div>

                {/* Menu de navegação */}
                <div className="flex gap-6 text-lg font-medium">
                    <span className="cursor-pointer hover:text-[#E2E2E2]">Menu</span>
                    <span className="cursor-pointer hover:text-[#E2E2E2]">Planos</span>
                    <span className="cursor-pointer hover:text-[#E2E2E2]">Unidades</span>
                    <span className="cursor-pointer hover:text-[#E2E2E2]">Usuário</span>
                    <span className="cursor-pointer hover:text-[#E2E2E2]">Logout</span>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
