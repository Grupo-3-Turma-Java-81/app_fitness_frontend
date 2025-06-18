import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import Home from "./pages/home/Home";
import HomeAluno from "./pages/page/PageAluno";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import SobreNos from "./pages/sobre-nos/SobreNos";
import LoginAluno from "./pages/login/LoginAluno";
import { AuthProvider } from "./contexts/AuthContext";
import EscolhaLogin from "./pages/login/EscolhaLogin";
import HomeInstrutor from "./pages/page/PageInstrutor";
import Professores from "./pages/professores/Professores";
import LoginInstrutor from "./pages/login/LoginInstrutor";
import CadastroAluno from "./pages/cadastro/CadastroUsuarioAluno";
import ListarAlunos from "./components/aluno/listar-aluno/ListarAluno";
import DeletarAluno from "./components/aluno/deletar-aluno/DeletarAluno";
import FormAluno from "./components/aluno/cadastrar-aluno/CadastrarAluno";
import ListarTreinos from "./components/treinos/listar-treino/ListarTreino";
import CadastroFuncionario from "./pages/cadastro/CadastroUsuarioFuncionario";
import DeletarTreino from "./components/treinos/deletar-treino/DeletarTreino";


function AppContent() {
    const location = useLocation();

    const hideNavbarRoutes = [
        "/login",
        "/login-aluno",
        "/login-funcionario",
        "/cadastro-aluno",
        "/cadastro-funcionario"
    ];

    const hideNavbar = hideNavbarRoutes.includes(location.pathname);

    return (
        <>
            {!hideNavbar && <Navbar />}

            <div className="flex-grow">
                <Routes>
                    <Route path="/login" element={< EscolhaLogin />} />
                    <Route path="/login-funcionario" element={< LoginInstrutor />} />
                    <Route path="/login-aluno" element={< LoginAluno />} />

                    <Route path="/cadastro-funcionario" element={< CadastroFuncionario />} />
                    <Route path="/cadastro-aluno" element={< CadastroAluno />} />

                    <Route path="/page-instrutor" element={< HomeInstrutor />} />

                    <Route path="/page-aluno" element={< HomeAluno />} />
                    <Route path="/novo-aluno" element={< FormAluno />} />
                    
                    <Route path="/editar-treino/:id" element={< HomeInstrutor />} />
                    <Route path="/editar-aluno/:id" element={< FormAluno />} />

                    <Route path="/deletar-treino/:id" element={< DeletarTreino />} />
                    <Route path="/deletar-aluno/:id" element={< DeletarAluno />} />

                    <Route path="/lista-alunos" element={< ListarAlunos />} />
                    <Route path="/lista-treinos" element={< ListarTreinos />} />
                    <Route path="/outros-treinos" element={< ListarTreinos />} />

                </Routes>
            </div>

        </>
    );
}

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <AppContent />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/sobre-nos" element={<SobreNos />} />
                    <Route path="/personais-trainers" element={<Professores />} />
                </Routes>

                <Footer />

            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
