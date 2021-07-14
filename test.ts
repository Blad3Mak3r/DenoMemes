import { getMeme, Meme } from "./mod.ts";
import {
  assertExists,
  assertThrowsAsync,
} from "https://deno.land/std@0.101.0/testing/asserts.ts";

Deno.test("doesThrow", async function () {
  await assertThrowsAsync(
    async () => {
      await getMeme("-1");
    },
  );
});

Deno.test("Testing r/memes image", async function () {
  const meme: Meme = await getMeme();

  assertExists(meme);
  assertExists(meme.image);
});

Deno.test("Testing r/ValorantMemes image", async function () {
  const meme: Meme = await getMeme("valorantmemes");

  assertExists(meme);
  assertExists(meme.image);
});
