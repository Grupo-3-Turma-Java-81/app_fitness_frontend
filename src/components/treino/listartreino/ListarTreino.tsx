import { Oval } from 'react-loader-spinner';
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";

import { buscar } from '../../../services/Service';
import type { Treino } from "../../../models/Treino";
import { AuthContext } from "../../../contexts/AuthContext";
import CardTreino from '../../treinos/card-treinos/CardTreinos';

function ListarTreinos() {
  const navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario?.token ?? "";

  const [treinos, setTreinos] = useState<Treino[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      alert('Você precisa estar logado');
      navigate('/');
      return;
    }

    async function buscarTreinos() {
      setLoading(true);
      try {
        await buscar('/treinos', setTreinos, {
          headers: { Authorization: token },
        });
      } catch (error: any) {
        if (error.toString().includes('403')) {
          handleLogout();
        } else {
          alert('Erro ao buscar treinos');
          console.error(error);
        }
      } finally {
        setLoading(false);
      }
    }

    buscarTreinos();
  }, [token, navigate, handleLogout]);

  if (loading) {
    return (
      <div className="flex justify-center items-center my-8">
        <Oval
          height={40}
          width={40}
          color="#D7F900"
          secondaryColor="#E2E2E2"
          strokeWidth={4}
          strokeWidthSecondary={2}
          ariaLabel="loading"
        />
      </div>
    );
  }

  return (
    <div className="flex justify-center pt-20 px-4">
      <div className="bg-[#D9D9D9] p-8 rounded-md w-full max-w-4xl">
        <h1 className="text-2xl font-bold text-center mb-6">Lista de treinos</h1>
        <div className="flex flex-col items-center">
          {treinos.length > 0 ? (
            treinos.map((treino) => (
              <CardTreino key={treino.id} treino={treino} />
            ))
          ) : (
            <p className="text-center text-slate-600 py-4">Nenhum treino encontrado.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ListarTreinos;