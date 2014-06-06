(function (global) {
  'use strict';
  if (typeof require === 'function') {
    global.chai = global.chai || require('assertive-chai');

    global.pollUntil = global.pollUntil || require('../poll-until');
  }
}(this));

(function (global) {
  'use strict';
  var assert, pollUntil;
  assert = global.chai.assert;

  pollUntil = global.pollUntil;

  suite('pollUntil', function () {

    test('global function', function () {
      assert.isFunction(pollUntil);
    });

    test('when condition() is truthy, calls callback()', function (done) {
      var condition;
      pollUntil(function () {
        return !!condition;
      }, 197, function () {
        assert(true);
        done();
      });

      setTimeout(function () {
        condition = true;
      }, 497);
    });

    test('when condition() is falsey, does not call callback()', function (done) {
      var stop;
      stop = pollUntil(function () {
        return false;
      }, 197, function () {
        assert(false, 'callback should not be called!');
      });

      setTimeout(function () {
        stop();
        assert(true);
        done();
      }, 1500);
    });

  });
}(this));
