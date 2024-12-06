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

interface EmpresaInterface {
  data: [];
  totalPages: number;
  currentPage: number;
  cpfcnpj: string;
}

const findManyEmpresas = async (cpfcnpj: string) => {
  // if (page < 1 || limit < 1) {
  //   throw new Error("Page and limit must be greater than 0");
  // }
  // const empresas = await db.empresa.findMany();
  // console.log(empresas);
  return await db.empresa.findMany();
  const totalRecords = await db.empresa.count({
    where: {
      cpf_cnpj: cpfcnpj,
    },
  });

  // Calcular o total de páginas
  const totalPages = Math.ceil(totalRecords / 10);

  // Garantir que a página solicitada não seja maior que o número de páginas
  // const currentPage = Math.min(page, totalPages);

  const data = await db.empresa.findMany({
    where: {
      cpf_cnpj: cpfcnpj,
    },
    // skip: (currentPage - 1) * 10,
    take: 10,
  });

  console.dir(data, { depth: null });
};

export { upInsertEmpresa, deleteEmpresa, findManyEmpresas };
