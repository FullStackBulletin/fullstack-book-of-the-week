import test from 'ava';
import { bookOfTheWeek } from '../src';
import fixtureData from './fixtures/books.json';

test('it should return a book for a given index', (t) => {
  const book = bookOfTheWeek(fixtureData)(1);
  t.is(book.id, '0008166099');
});

test('it should use the modulo of the index if the given index exceedes the number available books', (t) => {
  const book = bookOfTheWeek(fixtureData)(4);
  t.is(book.id, '0008166099');
});

test('it should return a default book', (t) => {
  const book = bookOfTheWeek()();
  t.truthy(book);
});
