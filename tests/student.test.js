const { calcTotal } = require('../js/pricing');

test('student discount: 2 tickets', function () {
  const total = calcTotal(2, false, true);
  assertEq(total, 622.9);
});

test('no discount for regular price', function () {
  const total = calcTotal(2, false, false);
  assertEq(total, 724);
});