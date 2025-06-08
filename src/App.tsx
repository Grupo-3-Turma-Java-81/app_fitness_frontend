import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import HomeAluno from "./pages/page/PageAluno";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Cadastro from "./pages/cadastro/Cadastro";
import SobreNos from "./pages/sobre-nos/SobreNos";
import FormAluno from "./components/aluno/FormAluno";
import { AuthProvider } from "./contexts/AuthContext";
import HomeInstrutor from "./pages/page/PageInstrutor";
import Professores from "./pages/professores/Professores";
import FormTreino from "./components/treinos/form-treino/FormTreino";


function AppContent() {
    const location = useLocation();

    const hideLayout = ["/login", "/cadastro"].includes(location.pathname);

    return (
        <>
            {!hideLayout && <Navbar />}

            <div className="flex-grow">
                <Routes>
                    <Route path="/login" element={< Login />} />
                    <Route path="/cadastro" element={< Cadastro />} />

                    <Route path="/page-instrutor" element={< HomeInstrutor />} />
                    <Route path="/page-aluno" element={< HomeAluno />} />
                    <Route path="/form-aluno" element={< FormAluno />} />
                    <Route path="/form-treino" element={< FormTreino />} />
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
