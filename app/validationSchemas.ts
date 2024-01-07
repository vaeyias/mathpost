import { z } from 'zod';

export const createProblemSchema = z.object({
    question: z.string().min(3).max(255),
    answer: z.string().min(1).max(15)
});
