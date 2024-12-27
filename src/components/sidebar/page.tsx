"use client";
import Image from "next/image";
import Link from "next/link";
import { Building, UserIcon, UsersIcon } from "lucide-react";
import { logout } from "@/auth/auth";
import { ExitIcon } from "@radix-ui/react-icons";

export default function Page({ people }: any) {
  const Menus = [
    {
      title: people?.tipo == "Admin" ? "Usuários" : "Usuário",
      src:
        people?.tipo == "Admin" ? (
          <UsersIcon width={24} height={24} />
        ) : (
          <UserIcon width={24} height={24} />
        ),
      select: false,
      path: "/usuarios",
    },
    { title: "Empresas", src: <Building />, gap: false, path: "/empresas" },
  ];

  return (
    <div className="flex bg-[#376D2B] flex-col w-72 p-2 shadow-xl gap-2">
      <h1
        style={{
          textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          fontWeight: "bold",
        }}
        className={`text-white shadow-black origin-left font-medium text-xl  p-2 text-center duration-300  w-full "
        }`}
      >
        CMEP
      </h1>

      <div className="bg-white rounded-sm shadow-sm flex flex-row justify-between p-2 ">
        <div className="flex  items-center  gap-1">
          <div>
            <Image
              className="rounded-full border p-1"
              width="32"
              height="32"
              src="/img/user.png"
              alt=""
            />
          </div>

          <div className=" ">
            <p className="text-sm font-medium text-gray-900">{people?.nome}</p>
            <p className="text-sm text-gray-500">{people?.tipo}</p>
          </div>
        </div>
      </div>

      <ul>
        {Menus.map((menu, index) => (
          <Link key={index} href={menu.path}>
            <li
              key={index}
              style={{
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                fontWeight: "bold",
              }}
              className={`text-white  text-sm flex items-center gap-x-4 
                            cursor-pointer p-2 hover:bg-slate-300 hover:-z-50 rounded-md hover:text-black
                            ${menu.gap ? "mt-9" : "mt-0"} ${
                menu.select == true && "bg-slate-500"
              }`}
            >
              {menu.src}
              <span className={` origin-left duration-200`}>{menu.title}</span>
            </li>
          </Link>
        ))}
        <li
          onClick={() => {
            logout();
          }}
          style={{
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            fontWeight: "bold",
          }}
          className={`text-white  text-sm flex items-center gap-x-4 
              cursor-pointer p-2 hover:bg-slate-300 hover:-z-50 rounded-md hover:text-black mt-0 `}
        >
          <ExitIcon width={24} height={24} />
          <span className={`origin-left duration-200`}>Sair</span>
        </li>
      </ul>
    </div>
  );
}
