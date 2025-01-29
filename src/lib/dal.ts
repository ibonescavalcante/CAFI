// DAL (Data Access Layer):
// É uma camada de software responsável por lidar com o acesso a dados,
// como bancos de dados, APIs, ou qualquer outra fonte de dados persistente.
// Essa camada abstrai os detalhes de como os dados são obtidos,
//  armazenados e manipulados, permitindo que outras partes do sistema interajam com os dados de maneira uniforme
"use server";
import { cookies } from "next/headers";
import { cache } from "react";
import { decrypt } from "./session";
import { redirect } from "next/navigation";
import { db } from "./prisma";

export const verifySession = cache(async () => {
  const cookie = cookies().get("session")?.value;
  const session = await decrypt(cookie);

  if (!session?.userId) {
    redirect("/login");
  }

  return { isAuth: true, userId: session.userId };
});

export const getUser = cache(async () => {
  const session = await verifySession();

  if (!session) return null;

  try {
    const data = await db.user.findMany({
      select: {
        id: true,
        nome: true,
        user: true,
        tipo: true,
        status: true,
      },
      where: {
        id: Number(session.userId),
      },
    });

    const user = data[0];
    // console.log("getUser", user);
    return user;
  } catch (error) {
    // console.log("Failed to fetch user");
    return null;
  }
});
