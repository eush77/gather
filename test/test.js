'use strict';

var gather = require('..');

var test = require('tape');


var async = function (fn) {
  setTimeout(fn, 0);
};


test('gather', function (t) {
  var done = gather(function (a, b, c) {
    t.equal(a, null);
    t.equal(b, 0);
    t.equal(c, 1);
    t.end();
  });

  async(function () {
    done(undefined, 0, undefined);
  });

  async(function () {
    async(function () {
      async(function () {
        done(null, undefined, undefined);
      });
    });
  });

  done(undefined, undefined, 1);
});


test('example', function (t) {
  var feed = gather(function (a, b) {
    log(a + b);
  });

  async(function () {
    async(function () {
      feed('foo', undefined);
    });
  });

  async(function () {
    feed(undefined, 'bar');
  });

  function log(foobar) {
    t.equal(foobar, 'foobar');
    t.end();
  }
});
