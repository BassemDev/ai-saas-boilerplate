import * as z from "zod";

export const formSchema = z.object({
    prompt: z.string().min(2, {message: "You should write at least 2 charcters to start conversation"}),
    amount: z.string().min(1),
    resolution: z.string().min(1)
});

export const amountOptions = [
    {
        value: "1",
        label: "1 Photos"
    },
    {
        value: "2",
        label: "2 Photos"
    },
    {
        value: "3",
        label: "3 photos",
    },
    {
        value: "4",
        label: "5 photos",
    },
    {
        value: "6",
        label: "6 photos",
    }
];

export const resolutionOptions = [
    {
        value: "256x256",
        label: "256x256"
    },
    {
        value: "512x512",
        label: "512x512"
    },
    {
        value: "1024x1024",
        label: "1024x1024"
    }
]