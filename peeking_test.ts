import { assertEquals } from "https://deno.land/std@0.90.0/testing/asserts.ts";
import { fromIterable, fromIterator } from "./peeking.ts";

Deno.test("fromIterator creates peeking iterator", () => {
  const it = fromIterator("abc"[Symbol.iterator]());
  const peek = it.peek();
  const next = it.next();
  assertEquals(peek.value, next.value);
});

Deno.test("fromIterable creates peeking iterator", () => {
  const it = fromIterable("abc");
  const peek = it.peek();
  const next = it.next();
  assertEquals(peek.value, next.value);
});
