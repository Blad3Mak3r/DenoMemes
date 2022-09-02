import { json, serve } from "https://deno.land/x/sift@0.5.0/mod.ts";
import { getMeme } from "./api.ts";

serve({
  "/": async () => {
    const meme = await getMeme();
    return json(meme);
  },
  "/r/:subreddit": async (_request, _connInfo, params) => {
    const subreddit = params?.subreddit
    const meme = await getMeme(subreddit);
    return json(meme);
  },
  404: () => json({ message: "Not found" }, { status: 404 }),
});
