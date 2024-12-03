import { empresacolumns } from "./_columns/page";
import Image from "next/image";
import { DataTable } from "./_component/data-table";

import { db } from "@/lib/prisma";

// import { createEmpresa } from "./_actions/_create-empresa";

const Page = async () => {
  const getEmpresas = await db.empresa.findMany({
    take: 10,
  });
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

      {/* <Empresas /> */}
      <DataTable columns={empresacolumns} data={getEmpresas} />
    </div>
  );
};

export default Page;
