(function (global) {
  'use strict';
  if (typeof require === 'function') {
    global.chai = global.chai || require('assertive-chai');

    global.pollUntil = global.pollUntil || require('../poll-until');
  }
}(this));

(function (global) {
  'use strict';
  var assert;
  assert = global.chai.assert;

  suite('pollUntil', function () {

    test('global function', function () {
      assert.isFunction(global.pollUntil);
    });

  });
}(this));
