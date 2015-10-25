var test        = require('tape')
  , numberRange = require('../');

test('works with empty set without breaking', function (t) {
  t.plan(1);
  t.deepEqual(numberRange([]), []);
});

test('works with set with one element without breaking', function (t) {
  t.plan(3);
  t.deepEqual(numberRange([ 1 ]), [ 1 ]);
  t.deepEqual(numberRange([ 2 ]), [ 2 ]);
  t.deepEqual(numberRange([ 9 ]), [ 9 ]);
});

test('works with simple continuous set', function (t) {
  t.plan(3);
  t.deepEqual(numberRange([ 1,  2,  3 ]), [ [ 1,  2,  3 ] ]);
  t.deepEqual(numberRange([ 5,  6,  7 ]), [ [ 5,  6,  7 ] ]);
  t.deepEqual(numberRange([ 9, 10, 11 ]), [ [ 9, 10, 11 ] ]);
});

test('works with simple set with gap at begin', function (t) {
  t.plan(3);
  t.deepEqual(numberRange([  1,  3,  4,  5 ]), [  1, [  3,  4,  5 ] ]);
  t.deepEqual(numberRange([ 11, 15, 16, 17 ]), [ 11, [ 15, 16, 17 ] ]);
  t.deepEqual(numberRange([ 24, 26, 27, 28 ]), [ 24, [ 26, 27, 28 ] ]);
});

test('works with simple set with gap at end', function (t) {
  t.plan(3);
  t.deepEqual(numberRange([  1,  2,  3,  5 ]), [ [  1,  2,  3 ],  5 ]);
  t.deepEqual(numberRange([ 13, 14, 15, 19 ]), [ [ 13, 14, 15 ], 19 ]);
  t.deepEqual(numberRange([ 26, 27, 28, 31 ]), [ [ 26, 27, 28 ], 31 ]);
});

test('works with simple set with gap between', function (t) {
  t.plan(3);
  t.deepEqual(numberRange([  1,  2,  3,  5,  7,  8,  9 ]), [ [ 1, 2, 3 ], 5, [ 7, 8, 9 ] ]);
  t.deepEqual(numberRange([ 14, 15, 18, 21, 22, 23, 24 ]), [ [ 14, 15 ], 18, [ 21, 22, 23, 24 ] ]);
  t.deepEqual(numberRange([ 43, 44, 45, 46, 51, 53, 54 ]), [ [ 43, 44, 45, 46 ], 51, [ 53, 54] ]);
});
