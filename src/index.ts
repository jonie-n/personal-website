import { serve } from "@hono/node-server";
import { app } from "./app";

// Server setup
const port = 3000;
console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});
