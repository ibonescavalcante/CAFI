import { z } from "zod";

export const UserSchema = z.object({
  id: z.number().optional(), // Validação para UUID
  nome: z.string().min(5), // Validação básica de CPF/CNPJ
  user: z.string().min(1),
  tipo: z.string().min(1),
  status: z.string().min(1),
  senha: z.string().min(6),
});

export type UserInterfaceSchema = z.infer<typeof UserSchema>;
