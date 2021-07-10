import { assertEquals } from "https://deno.land/std@0.90.0/testing/asserts.ts";
import { fromIterable } from "./peeking.ts";
import { takeWhile } from "./take_while.ts";

Deno.test("takeWhile removes until condition is not met", () => {
  const it = fromIterable("abcde");
  const abc = takeWhile(it, (x) => x !== "d");
  assertEquals([...abc], ["a", "b", "c"]);
});
