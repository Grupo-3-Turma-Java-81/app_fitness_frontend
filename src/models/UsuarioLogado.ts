export default interface UsuarioLogado {
    id: number;
    nome: string;
    usuario: string;
    foto: string;
    token: string;
    status?: 'ativo' | 'inativo';
}