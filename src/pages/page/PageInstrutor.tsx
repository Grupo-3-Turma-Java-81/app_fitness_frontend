import React from "react";

import FormAluno from "../../components/aluno/FormAluno";
import CardHome from "../../components/instrutor/CardHome";
//import CardInstrutor from "../../components/instrutor/CardHome";
import FormTreino from "../../components/treinos/form-treino/FormTreino";
// import ModalTreino from "../../components/treinos/modal-treinos/modal-treinos";

const HomeInstrutor: React.FC = () => {
    return (
        <main>
            <div className="container mx-auto px-4 pt-20">
                {/* <h1 className="text-3xl font-bold mb-6 text-center">Página inicial de instrutores</h1> */}
                <br></br>
            </div>

            <div className="max-w-4xl mx-auto mb-6">
                <CardHome
                    nome="Instrutor"
                    status="ativo"
                    fotoUrl="Foto do instrutor"
                />
            </div>

            {/* <ModalTreino /> */}
            <FormAluno />

            <FormTreino />


        </main>
    );
};

export default HomeInstrutor;
