import { createContext, useState, type ReactNode } from "react";

import { buscar, login } from "../services/Service";
import type UsuarioLogin from "../models/UsuarioLogin";
import type UsuarioLogado from "../models/UsuarioLogado";
import { ToastAlerta } from "../utils/ToastAlerta";

interface AuthContextProps {
    usuario: UsuarioLogado;
    handleLogout(): void;
    handleLogin(usuario: UsuarioLogin): Promise<void>;
    isLoading: boolean;
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {
    const [usuario, setUsuario] = useState<UsuarioLogado>({
        id: 0,
        nome: "",
        usuario: "",
        foto: "",
        token: "",
        status: "ativo"
    });

    const [isLoading, setIsLoading] = useState(false)

    async function handleLogin(usuarioLogin: UsuarioLogin) {
        setIsLoading(true);

        try {
            await login("/usuarios/logar", usuarioLogin, setUsuario);
            ToastAlerta("Usuário foi autenticado com sucesso!", "sucesso")

            try {
                await buscar(`/usuarios/${usuarioLogin.usuario}`, setUsuario, {
                    headers: {
                        Authorization: usuarioLogin.token
                    }
                });
            } catch (erroBusca) {
                console.error("Erro ao buscar dados completos:", erroBusca);
            }

        } catch (erroLogin) {
            console.error("Erro no login:", erroLogin);
            ToastAlerta("Erro no login:", "erro")
        }

        setIsLoading(false);
    }


    function handleLogout() {
        setUsuario({
            id: 0,
            nome: "",
            usuario: "",
            foto: "",
            token: ""
        })
    }

    return (
        <AuthContext.Provider value={{ usuario, handleLogin, handleLogout, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}