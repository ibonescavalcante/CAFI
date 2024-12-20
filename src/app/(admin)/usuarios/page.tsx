// import Usuarios from "../../../components/usuario/_columns/page";

import { usuarioscolumns } from "@/components/usuario/_columns/page";
import { DataTable } from "@/components/usuario/components/data-table";
import { findManyUsers } from "@/servicos/usuario";
import Image from "next/image";

const Page = async (req: any) => {
  const getUsers = await findManyUsers(req.searchParams.filter);
  return (
    <div className="flex flex-col p-4">
      <div className="flex items-center gap-4 p-4">
        <Image width="50" height="40" alt="Empreasa" src="/img/user.svg" />
        <div className=" flex flex-col ">
          <strong
            style={{
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              fontWeight: "bold",
            }}
            className="text-[32px] "
          >
            Usuarios
          </strong>
          <span
            style={{ fontSmooth: "auto", fontWeight: "normal" }}
            className="-mt-1 pl-1 text-sm  text-gray-500"
          >
            Visualize os usuarios cadastradas no sistema.
          </span>
        </div>
      </div>

      <DataTable columns={usuarioscolumns} data={getUsers} />
    </div>
  );
};
export default Page;
