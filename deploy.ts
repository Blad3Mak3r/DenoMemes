import { json, serve } from "https://deno.land/x/sift@0.3.3/mod.ts";
import { getMeme } from "./api.ts";

serve({
  "/": async () => {
    const meme = await getMeme();
    return json(meme);
  },
  "/:slug": async (
    _request: Record<string, unknown>,
    params: Record<string, unknown>,
  ) => {
    const meme = await (params.slug);
    return json(meme);
  },
  404: () => new Response("Not found"),
});
