"use server";
import { db } from "@/lib/prisma";
import { EmpresaInterfaceSchema, EmpresaSchema } from "@/types/empresas-dto";
import { revalidatePath } from "next/cache";
import { Empresa } from "@prisma/client";
import { throwDeprecation } from "process";

const upInsertEmpresa = async (empresa: EmpresaInterfaceSchema) => {
  console.log("Insert", empresa);
  const userId = 1;
  //verifica se usuario exite
  //   EmpresaSchema.parse(empresa);
  await db.empresa.upsert({
    where: {
      id: empresa.id ?? 0,
    },
    update: { ...empresa, userId },
    create: { ...empresa, userId },
  });

  revalidatePath("/empresas");
};

const deleteEmpresa = async (empresaID: number) => {
  console.log("Delete", empresaID);
  const userId = 1;
  //verifica se usuario exite
  await db.empresa.delete({
    where: {
      id: empresaID,
    },
  });

  revalidatePath("/empresas");
};

const findManyEmpresas = async (cpfcnpj: string) => {
  console.log(cpfcnpj);
  return await db.empresa.findMany({
    where: {
      cpf_cnpj: {
        contains: cpfcnpj,
      },
    },
    // take: cpfcnpj !== "" ? 5 : 10,
    take: 5,
  });
};

export { upInsertEmpresa, deleteEmpresa, findManyEmpresas };
