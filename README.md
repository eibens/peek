# peek

[peek] implements a peeking iterator in TypeScript for [Deno].

[![License][license-shield]](LICENSE) [![Deno doc][deno-doc-shield]][deno-doc]
[![Deno module][deno-land-shield]][deno-land]
[![Github tag][github-shield]][github] [![Build][build-shield]][build]
[![Code coverage][coverage-shield]][coverage]

# Motivation

A peeking iterator allows one to look at the next item without taking it. This
can be useful if one only wants to consume items while a certain condition is
met. For example, a scheduler algorithm that only schedules tasks within a
certain time window can use a peeking iterator to check whether the event should
be scheduled, otherwise leaving it in the iterator for the next scheduling
cycle.

# [mod.ts](mod.ts)

This module exports all other modules.

# [peeking.ts](peeking.ts)

The `fromIterator` function creates a `PeekingIterator` from a normal `Iterator`
by implementing the `peek` function.

```ts
import {
  fromIterator,
  PeekingIterator,
} from "https://deno.land/x/peek/peeking.ts";

const peeking: PeekingIterator = fromIterator(
  "abc"[Symbol.iterator](),
);

const preview: number = peeking.peek();
console.assert(preview === "a");

// The item is still in the iterator.
const next = peeking.next();
console.assert(next.value === "a");
```

The `fromIterable` function creates a `PeekingIterator` from an `Iterable`.

```ts
import { fromIterable } from "https://deno.land/x/peek/peeking.ts";

const peeking = fromIterable("abc");

console.assert(typeof peeking.peek === "function");
```

# [take_while.ts](take_while.ts)

The `takeWhile` generator function removes items from a `PeekingIterator` as
long as the specified `condition` is met.

```ts
import { fromIterable } from "https://deno.land/x/peek/peeking.ts";
import { takeWhile } from "https://deno.land/x/peek/take_while.ts";

const peeking = fromIterable("abcde");
const abc = takeWhile(peeking, (x) => x !== "d");

console.assert(Array.from(abc).join("") === "abc");
```

[peek]: #
[Deno]: https://deno.land

<!-- badges -->

[github]: https://github.com/eibens/peek
[github-shield]: https://img.shields.io/github/v/tag/eibens/peek?label&logo=github
[coverage-shield]: https://img.shields.io/codecov/c/github/eibens/peek?logo=codecov&label
[license-shield]: https://img.shields.io/github/license/eibens/peek?color=informational
[coverage]: https://codecov.io/gh/eibens/peek
[build]: https://github.com/eibens/peek/actions/workflows/ci.yml
[build-shield]: https://img.shields.io/github/workflow/status/eibens/peek/ci?logo=github&label
[deno-doc]: https://doc.deno.land/https/deno.land/x/peek/mod.ts
[deno-doc-shield]: https://img.shields.io/badge/doc-informational?logo=deno
[deno-land]: https://deno.land/x/peek
[deno-land-shield]: https://img.shields.io/badge/x/peek-informational?logo=deno&label
