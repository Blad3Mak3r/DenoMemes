import { json, serve } from "https://deno.land/x/sift@0.3.3/mod.ts";
import { getMeme } from "./api.ts";

serve({
  "/": async () => {
    const meme = await getMeme();
    return json(meme);
  },
  "/favicon.icon": () => new Response("Not found"),
  "/:slug": async (
    _request: Record<string, unknown>,
    params: Record<string, unknown>,
  ) => {
    const slug = params.slug as string
    const meme = await getMeme(slug);
    return json(meme);
  },
  404: () => new Response("Not found"),
});
