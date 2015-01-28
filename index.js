'use strict';


module.exports = function (done) {
  var args = [];
  var count = 0;

  return function () {
    for (var i = 0; i < arguments.length; ++i) {
      if (arguments[i] != null) {
        count += (args[i] == null);
        args[i] = arguments[i];
      }
    }

    if (count == arguments.length) {
      done.apply(null, args);
    }
  };
};
