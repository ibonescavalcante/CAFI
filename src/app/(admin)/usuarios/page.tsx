// import Usuarios from "../../../components/usuario/_columns/page";

import { usuarioscolumns } from "@/components/usuario/_columns/page";
import { DataTable } from "@/components/usuario/components/data-table";
import { findManyUsers } from "@/servicos/usuario";
import { UserIcon, UsersIcon } from "lucide-react";
import Image from "next/image";

const Page = async (req: any) => {
  //buscar tipo de usuario
  //se Admin
  const getUsers = await findManyUsers(req.searchParams.filter);
  // se User
  //busca o usuario com id da sessao
  const usuario = { type: "Admin" };

  // const retuser = await loginUser("admin", "102030");

  // console.log(retuser);
  return (
    <div className="flex flex-col p-4">
      <div className="flex items-center gap-4 p-4">
        {usuario.type == "Admin" ? (
          <UsersIcon width={50} height={50} />
        ) : (
          <UserIcon width={50} height={50} />
        )}
        {/* <Image
          width="50"
          height="40"
          alt="Empreasa"
          src={usuario.type == "Admin" ? "/img/users.png" : "/img/user.svg"}
        /> */}
        <div className=" flex flex-col ">
          <strong
            style={{
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              fontWeight: "bold",
            }}
            className="text-[32px] "
          >
            {usuario.type == "Admin" ? "Usuários" : "Usuário"}
          </strong>
          <span
            style={{ fontSmooth: "auto", fontWeight: "normal" }}
            className="-mt-1 pl-1 text-sm  text-gray-500"
          >
            {usuario.type == "Admin"
              ? " Visualize os usuarios cadastradas no sistema."
              : " Visualize seu usuario cadastradas no sistema."}
          </span>
        </div>
      </div>

      <DataTable columns={usuarioscolumns} data={getUsers} adminUser={false} />
    </div>
  );
};
export default Page;
