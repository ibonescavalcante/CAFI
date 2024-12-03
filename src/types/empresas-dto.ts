import { z } from "zod";

export const EmpresaSchema = z.object({
  id: z.number().optional(), // Validação para UUID
  cpf_cnpj: z.string().min(11).max(14), // Validação básica de CPF/CNPJ
  razao_social: z.string().min(1).optional(),
  nome_fantasia: z.string().min(1).optional(),
  tipo_ocorrencia: z.string().min(1).optional(),
  motivo: z.string().min(1).optional(),
  uasg_sancionadora: z.string().min(1).optional(),
  // ambito_da_sancao: z.string().min(1).optional(),
  // prazo: z.string().min(1).optional(),
  prazo_inicial: z.string().optional(), // Pode ajustar para um tipo de data mais específico, se necessário
  prazo_final: z.string().optional(),
  numero_do_processo: z.string().min(1).optional(),
  numero_do_contrato: z.string().optional(),
  valor_da_multa: z.string().optional(),
  descricao_justificativa: z.string().optional(),
  userId: z.number().optional(), // Referência ao usuário
});

export type EmpresaInterfaceSchema = z.infer<typeof EmpresaSchema>;
