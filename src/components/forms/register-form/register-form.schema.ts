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
   phone: z
      .string({ required_error: "⚠️ Telefone é obrigatório" })
      .min(1, "⚠️ Telefone é obrigatório").refine((doc) => {
         const replacedDoc = doc.replace(/\D/g, ''); 
         return replacedDoc.length >= 10; 
      }, 'Telefone deve conter no mínimo 10 dígitos.')
      .refine((doc) => {
         const replacedDoc = doc.replace(/\D/g, '');
         return replacedDoc.length <= 15;
      }, 'Telefone deve conter no máximo 15 dígitos.')
      .refine((doc) => {
         const replacedDoc = doc.replace(/\D/g, '');
         return !!Number(replacedDoc);
      }, 'Telefone deve conter apenas números.'),
   // matricula: z
   //    .string({ required_error: "⚠️ Matricula é obrigatória" })
   //    .min(1, "⚠️ Matricula é obrigatória")
   //    .optional(),
})