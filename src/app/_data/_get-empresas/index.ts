import { db } from "../../../lib/prisma";

// import { endOfMonth, startOfMonth } from "date-fns";

export const getEmpresas = async () => {
  //   const { userId } = auth();
  //   if (!userId) {
  //     throw new Error("Unauthorized");
  //   }
  const getLastEmpresas = await db.empresa.findMany({
    take: 10,
  });
  console.log("Empresa", getLastEmpresas);
  //   Empresas.count({
  //     where: {
  //       userId,
  //       createdAt: {
  //         gte: startOfMonth(new Date()),
  //         lt: endOfMonth(new Date()),
  //       },
  //     },
  //   });
  return getLastEmpresas;
};
