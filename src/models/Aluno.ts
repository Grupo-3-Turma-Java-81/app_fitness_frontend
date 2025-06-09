import { type Treino } from "./Treino";
import { type Usuario } from "./Usuario";

export interface Aluno {
  id: number;
  nome: string;
  endereco: string;
  telefone: string;
  peso: number;
  altura: number;
  treino: Treino | null;
  usuario?: Usuario;
}