"use server";
import { db } from "@/lib/prisma";

import { revalidatePath } from "next/cache";
import { UserInterfaceSchema, UserSchema } from "@/@types/users-dto";
import bcript from "bcrypt";

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
  console.log(nome);
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

export { findManyUsers, createUsuarios };
