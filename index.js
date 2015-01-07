"use strict";

// Window Scroll Position
//
// Cross-browser implementation of window.scrollX and window.scrollY.
//
// Implementation from jQuery
// See https://github.com/jquery/jquery/blob/835e8c4ae39f09d11ad42d24e0210bebfa8e8320/src/offset.js#L176-L178
//

[
  ["getScrollY", "scrollTop", "pageYOffset"],
  ["getScrollX", "scrollLeft", "pageXOffset"],
].forEach(function(props) {
  var fnName = props[0];
  var elProp = props[1];
  var winProp = props[2];

  module.exports[fnName] = function() {
    if (winProp in window) {
      return window[winProp];
    }
    else {
      return window.document.documentElement[elProp];
    }
  };
});
