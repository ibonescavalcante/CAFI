"use server";
import { db } from "@/lib/prisma";

import { revalidatePath } from "next/cache";
import { UserInterfaceSchema, UserSchema } from "@/@types/users-dto";
import bcript from "bcrypt";
import { createSession, deleteSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

// USUARIOS
//usuario nao pode mudar o nome nem logi somente senha
const createUsuarios = async (usuario: UserInterfaceSchema) => {
  // const user = await findManyUsers("admin");
  // console.log(user);
  // return;

  //verifica os dados no backand
  UserSchema.parse(usuario);
  //pega senha vinda e cria o hash para armazenamento
  const senha = await bcript.hash(usuario.senha, 10);
  await db.user.create({
    data: { ...usuario, senha },
  });

  revalidatePath("/usuarios");
};
const findManyUsers = async (nome: string) => {
  // console.log(nome);
  return await db.user.findMany({
    select: {
      id: true,
      nome: true,
      user: true,
      tipo: true,
      status: true,
    },
    where: {
      user: {
        contains: nome,
      },
    },
    orderBy: { nome: "asc" },
    // take: cpfcnpj !== "" ? 5 : 10,
    take: 10,
  });
};

// const loginUser = async (usuario: string, password: string) => {
//   const user = await db.user.findUnique({
//     where: { user: usuario, status: "ativo" },
//   });

//   if (!user) {
//     throw new Error("Usuário não encontrado");
//   }

//   const isValid = await bcript.compare(password, user.senha);

//   if (!isValid) {
//     console.log("senha incorreta");
//     throw new Error("Senha incorreta");
//   }
//   // crea sessao
//   await createSession(user.id.toString());
//   redirect("/empresas");

//   // return { id: user.id, nome: user.nome, usuario: user.user, tipo: user.tipo };
// };

export { findManyUsers, createUsuarios };
