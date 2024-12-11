import Image from "next/image";

import { DataTable } from "@/components/empresa/components/data-table";
import { findManyEmpresas } from "@/servicos/empresa";
import { empresacolumns } from "@/components/empresa/_columns/page";

const Page = async (req: any) => {
  const getEmpresas = await findManyEmpresas(req.searchParams.filter);
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
