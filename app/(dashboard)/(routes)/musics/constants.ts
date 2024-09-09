import * as z from "zod";

export const formSchema = z.object({
    prompt: z.string().min(2, { message: "You should write at least 2 charcters to start conversation"})
});