import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import Home from "./pages/home/Home";
import HomeAluno from "./pages/page/PageAluno";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import SobreNos from "./pages/sobre-nos/SobreNos";
import FormAluno from "./components/aluno/FormAluno";
import { AuthProvider } from "./contexts/AuthContext";
import HomeInstrutor from "./pages/page/PageInstrutor";
import Professores from "./pages/professores/Professores";
import ListarAlunos from "./components/aluno/ListarAluno";
import FormTreino from "./components/treinos/form-treino/FormTreino";
import EscolhaLogin from "./pages/login/EscolhaLogin";
import LoginInstrutor from "./pages/login/LoginInstrutor";
import LoginAluno from "./pages/login/LoginAluno";
import CadastroFuncionario from "./pages/cadastro/CadastroFuncionario";
import CadastroAluno from "./pages/cadastro/CadastroAluno";
import ListarTreinos from "./components/treinos/listar-treino/ListarTreino";
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
                    <Route path="/form-aluno" element={< FormAluno />} />
                    <Route path="/form-treino" element={< FormTreino />} />
                    <Route path="/form-treino/editar/:id" element={< FormTreino />} />


                    <Route path="/treinos/deletar/:id" element={< DeletarTreino />} />

                    <Route path="/lista-alunos" element={< ListarAlunos />} />
                    <Route path="/lista-treinos" element={< ListarTreinos />} />


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
