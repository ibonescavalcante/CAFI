import { empresacolumns } from "./_columns/page";
import Image from "next/image";
import { DataTable } from "./_component/data-table";

import { db } from "@/lib/prisma";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import FormAddUpdateEmpresa from "./_component/_form-add-update-empresa/page";
import AdicionaEmpresa from "./_component/upsert-empresa-dialog";
import UpsertEmpresaDialog from "./_component/upsert-empresa-dialog";
import { useState } from "react";
import AddNovaEmpresa from "./_component/button-add-empresa";
import SearchInput from "./_component/search-input";

import { Search } from "lucide-react";
import { findManyEmpresas } from "../_servicos/_empresa";

// import { createEmpresa } from "./_actions/_create-empresa";

const Page = async (searchParams?: string) => {
  // const buscarEmmpresa = async () => {
  //   await db.empresa.findMany({});
  // };
  // async function getServerSideProps() {
  //   const empresa = await db.empresa.findMany(); // Substitua 'user' pelo seu modelo
  //   return {
  //     props: {
  //       empresa,
  //     },
  //   };
  // }
  const getEmpresas = await db.empresa.findMany({
    where: {
      cpf_cnpj: {
        contains: !searchParams ? searchParams : "", // Pesquisa parcial
        // Ignora maiúsculas e minúsculas
      },
    },
  });
  //
  // console.log(getServerSideProps);

  // function handleSubmit(event: any): void {
  //   searchParams = "33";
  //   //  throw new Error("Function not implemented.");
  // }

  return (
    <div className="flex flex-col p-4">
      <div className="flex items-center gap-4 p-4">
        <Image width="50" height="40" alt="Empreasa" src="/img/Company.png" />

        <div className=" flex flex-col ">
          <strong
            style={{
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              fontWeight: "bold",
            }}
            className="text-[32px] "
          >
            Empresas
          </strong>
          <span
            style={{ fontSmooth: "auto", fontWeight: "normal" }}
            className="-mt-1 pl-1 text-sm  text-gray-500"
          >
            Visualize as empresas cadastradas no sistema.
          </span>
        </div>
      </div>
      <DataTable columns={empresacolumns} data={getEmpresas} />
    </div>
  );
};

export default Page;
