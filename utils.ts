// deno-lint-ignore-file camelcase

import { Meme } from "./meme.ts";

export interface RedditChildren {
  kind: string;
  data: {
    id: string;
    subreddit: string;
    title: string;
    author: string;
    url: string;
    ups: number;
    downs: number;
    score: number;
    num_comments: number;
    over_18: boolean;
    created_utc: bigint;
  };
}

interface RedditResponse {
  data: {
    children: RedditChildren[];
  };
}

export function isValidURL(url: string): boolean {
  return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
}

function randomNumber(max: number): number {
  return Math.floor(Math.random() * max);
}

export async function buildMeme(url: string): Promise<Meme> {
  const result = await fetch(url);

  if (result.status === 200) {
    const content = (await result.json() as RedditResponse).data.children;
    let post: RedditChildren = content[randomNumber(content.length)];
    let trys = 0;

    while (!isValidURL(post.data.url)) {
      post = content[randomNumber(content.length)];

      if (trys <= 50) {
        throw new Error(`Cannot get a valid image from ${url}.`);
      }

      trys++;
    }

    const meme = new Meme(post);

    if (meme === null) throw new Error(`Error creating meme from post`);
    return meme;
  } else {
    throw new Error(
      `Received not successful status code on request ${url}: ${result.status}`,
    );
  }
}
