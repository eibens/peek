import { PeekingIterator } from "./peeking.ts";

/**
 * Take items from the iterator until either...
 *
 * 1. the next value does not meet the condition, or...
 * 2. the iterator is done.
 *
 * @param iterator
 * @param condition
 */
export function* takeWhile<T>(
  iterator: PeekingIterator<T>,
  condition: (x: T) => boolean,
): Iterable<T> {
  for (
    // try first value
    let { value, done } = iterator.peek();
    // iterator not empty, and item meets the condition
    !done && condition(value);
    // remove value, try next item
    iterator.next(), { value, done } = iterator.peek()
  ) {
    // emit current event
    yield value;
  }
}
