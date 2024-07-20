import { z } from "zod";

const formSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(15, { message: "Username must be at most 15 characters." }),
  password: z
    .string()
    .min(5, { message: "Password must be at least 5 characters." })
    .max(15, { message: "Password must be at most 15 characters." }),
});

export { formSchema };
