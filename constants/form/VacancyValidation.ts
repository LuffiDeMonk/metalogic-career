import { z } from "zod";

export const VacancyValidation = z.object(
    {
        title: z.string(),
        level: z.string().optional()
    }
)

export type IVacancyValidation = z.infer<typeof VacancyValidation>