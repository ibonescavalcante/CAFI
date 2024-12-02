import { z } from "zod";

export const EmpresaSchema = z.object({
  id: z.number(), // Validação para UUID
  cpf_cnpj: z.string().min(11).max(14), // Validação básica de CPF/CNPJ
  razao_social: z.string().min(1),
  nome_fantasia: z.string().min(1),
  tipo_ocorrencia: z.string().min(1),
  motivo: z.string().min(1),
  uasg_sancionadora: z.string().min(1),
  ambito_da_sancao: z.string().min(1),
  prazo: z.string().min(1),
  prazo_inicial: z.string(), // Pode ajustar para um tipo de data mais específico, se necessário
  prazo_final: z.string(),
  numero_do_processo: z.string().min(1),
  numero_do_contrato: z.string().optional(),
  valor_da_multa: z.string().optional(),
  descricao_justificativa: z.string().optional(),
  userId: z.number(), // Referência ao usuário
});

export type EmpresaInterfaceSchema = z.infer<typeof EmpresaSchema>;
