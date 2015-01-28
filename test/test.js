'use strict';

var gather = require('..');

var test = require('tape');


var async = function (fn) {
  setTimeout(fn, 0);
};


test('gather', function (t) {
  var done = gather(function (a, b, c) {
    t.equal(a, 1);
    t.equal(b, 2);
    t.equal(c, 3);
    t.end();
  });

  async(function () {
    done(null, 2, null);
  });

  async(function () {
    async(function () {
      async(function () {
        done(1, null, null);
      });
    });
  });

  done(null, null, 3);
});
