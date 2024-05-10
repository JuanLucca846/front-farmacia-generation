import React, { useEffect, useState } from "react";
import Categoria from "../../../models/Categoria";
import { useNavigate } from "react-router-dom";
import { listar } from "../../../Service/Service";
import { Dna } from "react-loader-spinner";
import CardCategorias from "../cardCategorias/CardCategorias";

function ListaCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  let navigate = useNavigate();

  async function listarCategorias() {
    try {
      await listar("/categorias", setCategorias);
    } catch (error: any) {
      alert("O token expirou, favor logar novamente");
    }
  }

  useEffect(() => {
    listarCategorias();
  }, [categorias.length]);
  return (
    <>
      {categorias.length === 0 && (
        <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categorias.map((categoria) => (
              <>
                <CardCategorias key={categoria.id} categoria={categoria} />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaCategorias;
