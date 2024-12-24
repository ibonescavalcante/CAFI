"use server";
import { db } from "@/lib/prisma";
import { createSession, deleteSession } from "@/lib/session";
import bcript from "bcrypt";

import { redirect } from "next/navigation";

async function logout() {
  console.log("here");
  deleteSession();
  redirect("/login");
}
const loginUser = async (usuario: string, password: string) => {
  const user = await db.user.findUnique({
    where: { user: usuario, status: "ativo" },
  });
  console.log(user);
  if (!user) {
    throw new Error("Usuário não encontrado");
  }

  const isValid = await bcript.compare(password, user.senha);

  if (!isValid) {
    console.log("senha incorreta");
    //  throw new Error("Senha incorreta");
  }
  // crea sessao
  await createSession(user.id.toString());
  redirect("/empresas");

  // return { id: user.id, nome: user.nome, usuario: user.user, tipo: user.tipo };
};
export { logout, loginUser };
