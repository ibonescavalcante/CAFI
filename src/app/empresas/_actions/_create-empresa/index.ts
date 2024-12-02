import { db } from "../../../../lib/prisma";
import { EmpresaSchema, EmpresaInterfaceSchema } from "@/types/empresas-dto";

const Empresa = {
  cpf_cnpj: "12345678000195", // Validação básica de CPF/CNPJ
  razao_social: "Empresa A LTDA",
  nome_fantasia: "A Comércio",
  tipo_ocorrencia: "Multa por descumprimento contratual",
  motivo: "Não entrega no prazo acordado",
  uasg_sancionadora: "SEGOV",
  ambito_da_sancao: "MUNICIPAL",
  prazo: "30",
  prazo_inicial: "2024-01-01T00:00:00.000Z", // Pode ajustar para um tipo de data mais específico, se necessário
  prazo_final: "2025-01-01T00:00:00.000Z",
  numero_do_processo: "02122024",
  numero_do_contrato: "021322025",
  valor_da_multa: "",
  descricao_justificativa:
    "A empresa não cumpriu o prazo de entrega acordado no contrato.",

  userId: 1, // Referência ao usuário
};
// params: EmpresaInterfaceSchema
export const createEmpresa = async () => {
  //verificar se o usuario tem permissao para criar empresa

  //   await db.empresa.create({ data: params });
  const newempresa = await db.empresa.create({
    data: Empresa,
  });

  return newempresa;
};
