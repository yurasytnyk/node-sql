import z from "zod";
import { createEnv } from "@t3-oss/env-core";

export const ENV = createEnv({
  server: {
    PORT: z
      .string()
      .transform((value) => +value)
      .optional()
      .pipe(z.number().default(8080)),
    DB_HOST: z.string().default("127.0.0.1"),
    DB_USER: z.string().optional(),
    DB_PASSWORD: z.string().optional(),
    DB_NAME: z.string().optional().default("test"),
    DB_PORT: z
      .string()
      .transform((value) => +value)
      .pipe(z.number().default(5432))
      .optional(),
  },
  runtimeEnv: process.env,
});
