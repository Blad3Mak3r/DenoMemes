import { Meme } from "./meme.ts";
import { buildMeme } from "./utils.ts";

const baseURL = "https://www.reddit.com/r/{subreddit}/hot/.json?count=100";

export async function getMeme(r?: string): Promise<Meme> {
  if (!r) r = "memes";
  const url = baseURL.replace("{subreddit}", r);
  return await buildMeme(url);
}
