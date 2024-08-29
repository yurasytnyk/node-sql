import { Pool } from "pg";

import { ENV } from "configs/env.configs.js";

export const pool = new Pool({
  host: ENV.DB_HOST,
  user: ENV.DB_USER,
  password: ENV.DB_PASSWORD,
  database: ENV.DB_NAME,
  port: ENV.DB_PORT,
  idleTimeoutMillis: 30_000,
});
