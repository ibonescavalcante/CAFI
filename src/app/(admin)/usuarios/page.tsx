// import Usuarios from "../../../components/usuario/_columns/page";

import { usuarioscolumns } from "@/components/usuario/_columns/page";
import { DataTable } from "@/components/usuario/components/data-table";
import { getUser } from "@/lib/dal";
import { findManyUsers } from "@/servicos/usuario";
import { UserIcon, UsersIcon } from "lucide-react";
import Image from "next/image";

const Page = async (req: any) => {
  let getUsers: any = null;
  //buscar tipo de usuario
  const usuario = await getUser();
  if (usuario?.tipo === "Admin") {
    getUsers = await findManyUsers(req.searchParams.filter);
  } else {
    getUsers = [usuario];
  }

  return (
    <div className="flex flex-col p-4">
      <div className="flex items-center gap-4 p-4">
        {usuario?.tipo == "Admin" ? (
          <UsersIcon width={50} height={50} />
        ) : (
          <UserIcon width={50} height={50} />
        )}

        <div className=" flex flex-col ">
          <strong
            style={{
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              fontWeight: "bold",
            }}
            className="text-[32px] "
          >
            {usuario?.tipo == "Admin" ? "Usuários" : "Usuário"}
          </strong>
          <span
            style={{ fontSmooth: "auto", fontWeight: "normal" }}
            className="-mt-1 pl-1 text-sm  text-gray-500"
          >
            {usuario?.tipo == "Admin"
              ? " Visualize os usuarios cadastradas no sistema."
              : " Visualize seu usuario cadastradas no sistema."}
          </span>
        </div>
      </div>

      <DataTable
        columns={usuarioscolumns}
        data={getUsers}
        adminUser={usuario?.tipo === "Admin" ? true : false}
      />
    </div>
  );
};
export default Page;
