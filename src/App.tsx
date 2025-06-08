import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

import Login from "./pages/login/Login";
import Cadastro from "./pages/cadastro/Cadastro";

import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import HomeGeral from "./pages/home-publica/HomeGeral";


function AppContent() {
    const location = useLocation();

    const hideLayout = ["/login", "/cadastro"].includes(location.pathname);

    return (
        <>
            {!hideLayout && <Navbar />}

            <div className="min-h-[80vh]">
                <Routes>
                    <Route path="/" element={< HomeGeral />} />
                    <Route path="/login" element={< Login />} />
                    <Route path="/cadastro" element={< Cadastro />} />
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

                <Footer />
            
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
