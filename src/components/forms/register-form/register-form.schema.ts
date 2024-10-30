import z from "zod"

export const registerFormSchema = z.object({
   name: z
      .string({ required_error: "⚠️ Nome é obrigatório" })
      .min(1, "⚠️ Nome é obrigatório"),
   email: z
      .string({ required_error: "⚠️ E-mail é obrigatório" })
      .email("⚠️ E-mail inválido")
      .min(1, "⚠️ E-mail é obrigatório"),
   cpf: z
      .string({ required_error: "⚠️ CPF é obrigatório" })
      .min(1, "⚠️ CPF é obrigatório")
      .refine((doc) => {
         const replacedDoc = doc.replace(/\D/g, '');
         return replacedDoc.length >= 11;
      }, 'CPF deve conter no mínimo 11 caracteres.')
      .refine((doc) => {
         const replacedDoc = doc.replace(/\D/g, '');
         return replacedDoc.length <= 14;
      }, 'CPF deve conter no máximo 14 caracteres.')
      .refine((doc) => {
         const replacedDoc = doc.replace(/\D/g, '');
         return !!Number(replacedDoc);
      }, 'CPF deve conter apenas números.'),
   collaborator: z
      .enum(["Analista", "ATA", "Condutor", "Voluntario", "Pesquisador"], {
         required_error: "⚠️ Tipo de colaborador obrigatório"
      }),
   unity_conservation: z
      .string({ required_error: "⚠️ Unidade é obrigatória" })
      .min(1, "⚠️ Unidade é obrigatória"),
   matricula: z
      .string({ required_error: "⚠️ Matricula é obrigatória" })
      .min(1, "⚠️ Matricula é obrigatória")
      .optional(),
   password: z
      .string({ required_error: "⚠️ Senha é obrigatória" })
      .min(8, "⚠️ É nesessário ao menos 8 caracteres.")
      .regex(/[0-9]+/, "⚠️ É necessário pelo menos um numero")
      .regex(/(?=.*?[a-z])/, "⚠️ É necessário pelo menos uma letra minúscula")
      .regex(/(?=.*?[A-Z])/, "⚠️ É necessário pelo menos uma letra maiúscula")
      .regex(/[^A-Za-z0-9]/, "⚠️ É necessário pelo menos um caracter especial"),
   confirmPassword: z
      .string({ required_error: "⚠️ Confirmar senha é obrigatório" })
      .min(1, "⚠️ Este campo é obrigatório"),
}).refine(({ password, confirmPassword }) => {
   return password === confirmPassword
}, {
   message: "⚠️ As senhas não correspondem",
   path: ["confirmPassword"],
})