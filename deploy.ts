import { json, serve } from "https://deno.land/x/sift@0.5.0/mod.ts";
import { getMeme } from "./api.ts";

serve({
  "/": async () => {
    const meme = await getMeme();
    return json(meme);
  },
  "/favicon.ico": () => json({ message: "Not found" }, { status: 404 }),
  "/r/:subreddit": async (
    _request: Record<string, unknown>,
    params: Record<string, unknown>,
  ) => {
    const subreddit = params.subreddit as string
    const meme = await getMeme(subreddit);
    return json(meme);
  },
  404: () => json({ message: "Not found" }, { status: 404 }),
});
