import { z } from "zod";

export const EmpresaSchema = z.object({
  id: z.string().uuid(), // Validação para UUID
  cpf_cnpj: z.string().min(11).max(14), // Validação básica de CPF/CNPJ
  razao_social: z.string().min(1),
  nome_fantasia: z.string().min(1),
  tipo_ocorrencia: z.string().min(1),
  motivo: z.string().min(1),
  uasg_sancionadora: z.string().min(1),
  ambito_da_sancao: z.string().min(1),
  prazo: z.string().min(1),
  prazo_inicial: z.string().min(1), // Pode ajustar para um tipo de data mais específico, se necessário
  prazo_final: z.string().min(1),
  numero_do_processo: z.string().min(1),
  numero_do_contrato: z.string().optional(),
  valor_da_multa: z.string().optional(),
  descricao_justificativa: z.string().optional(),
  createdAt: z.string().datetime(), // Validação para formato de data ISO
  updatedAt: z.string().datetime(),
  data_inicio: z.string().datetime(),
  data_final: z.string().datetime(),
  userId: z.string().uuid(), // Referência ao usuário
});

export type EmpresaInterfaceSchema = z.infer<typeof EmpresaSchema>;
