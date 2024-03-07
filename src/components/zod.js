import {z} from 'zod'

export const cepForSchema = z.object({
    cep: z.string()
    .min(8, 'CEP deve ter 8 digitos')
    .refine((cep) => /^\d{5}\d{3}$/.test(cep), {
        message: "CEP invpalido, deve ter o formato 12345678"
    }),
})