import { z } from "zod";

export const UserSchema = z.object({
  id: z.string().uuid(), // Validação para UUID
  nome: z.string().min(1), // Nome não pode estar vazio
  user: z.string().min(1), // Username não pode estar vazio
  password: z.string().min(8), // Senha com no mínimo 8 caracteres
});
export type UserInterfaceSchema = z.infer<typeof UserSchema>;
