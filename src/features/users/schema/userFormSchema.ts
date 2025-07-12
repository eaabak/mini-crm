import { z } from "zod";

export const userFormSchema = z.object({
  name: z.string().min(2, "İsim en az 2 karakter olmalı"),
  email: z.string().email("Geçerli e-posta girin"),
  password: z.string().min(6, "Şifre en az 6 karakter"),
  role: z.enum(["Admin", "Manager", "User"]),
  isActive: z.boolean(),
});

export type UserFormValues = z.infer<typeof userFormSchema>;
