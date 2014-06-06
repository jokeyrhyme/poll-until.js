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

    test('returned stop() can be used to terminate early', function (done) {
      var stop, checkCount, callbackCalled;
      checkCount = 0;
      callbackCalled = false;
      stop = pollUntil(function () {
        checkCount += 1;
        return false;
      }, 197, function () {
        callbackCalled = true;
        assert(false, 'callback should not be called!');
      });

      stop();

      setTimeout(function () {
        assert.equal(checkCount, 1, 'condition only checked once');
        assert.isFalse(callbackCalled);
        done();
      }, 1500);
    });

  });
}(this));
