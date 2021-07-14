import { RedditChildren } from "./utils.ts";

export class Meme {
  readonly id: string;
  readonly subreddit: string;
  readonly title: string;
  readonly author: string;
  readonly image: string;
  readonly ups: number;
  readonly downs: number;
  readonly score: number;
  readonly comments: number;
  readonly nsfw: boolean;
  readonly createdUtc: bigint;

  constructor(content: RedditChildren) {
    this.id = content.data.id;
    this.subreddit = content.data.subreddit;
    this.title = content.data.title;
    this.author = content.data.author;
    this.image = content.data.url;
    this.ups = content.data.ups;
    this.downs = content.data.downs;
    this.score = content.data.score;
    this.comments = content.data.num_comments;
    this.nsfw = content.data.over_18;
    this.createdUtc = content.data.created_utc;
  }
}
