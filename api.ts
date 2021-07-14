import { Meme } from "./meme.ts";
import { buildMeme } from "./utils.ts";

const baseURL = "https://www.reddit.com/r/{subreddit}/hot/.json?count=100";

export async function getMeme(subreddit?: string): Promise<Meme> {
  if (!subreddit) subreddit = "memes";
  const url = baseURL.replace("{subreddit}", subreddit);
  return await buildMeme(url);
}
