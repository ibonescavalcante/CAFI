import { empresacolumns } from "./_columns/page";
import Image from "next/image";
import { DataTable } from "./_component/data-table";
import { db } from "@/lib/prisma";
import { NextRequest } from "next/server";
import { findManyEmpresas } from "../_servicos/_empresa";
interface EmpresaPageProps {
  id?: string;
  filter?: string;
}
const Page = async (request: any) => {
  const searchParams = new URLSearchParams(request.searchParams);
  let filter = searchParams.get("filter") ?? "";

  console.log(filter);

  const getEmpresas = await findManyEmpresas(filter); // db.empresa.findMany({

  //   where: {
  //     cpf_cnpj: {
  //       contains: filter ? filter : "", // Pesquisa parcial
  //       // Ignora maiúsculas e minúsculas
  //     },
  //   },
  // });

  return (
    <div className="flex flex-col p-4">
      <h1>Empresa </h1>
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
