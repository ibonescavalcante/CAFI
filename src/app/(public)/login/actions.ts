import { loginUser } from "@/auth/auth";
import { createSession } from "@/lib/session";

import { redirect } from "next/navigation";
import { z } from "zod";

//simulado para db
// const testUser = {
//   id: "1",
//   usuario: "contact@cosdensolutions.io",
//   password: "12345678",
// };

const loginSchema = z.object({
  usuario: z.string().min(5, { message: "Invalid email address" }).trim(),
  password: z
    .string()
    .min(6, { message: "Password must be at least 8 characters" })
    .trim(),
});

export async function login(prevState: any, formData: FormData) {
  const result = loginSchema.safeParse(Object.fromEntries(formData));
  console.log("Function login", result.success);

  if (!result.success) {
    console.log("error");
    return { errors: result.error.flatten().fieldErrors };
  }
  const { usuario, password } = result.data;
  console.log("data", usuario + ":" + password);

  await loginUser(usuario, password);
}
