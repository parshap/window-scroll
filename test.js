"use strict";

var assert = require("assert");
var scroll = require("./");

// Mock IE9+ window object
global.window = {
  pageYOffset: 1,
  pageXOffset: 2,
};

assert.equal(scroll.getScrollY(), 1);
assert.equal(scroll.getScrollX(), 2);

// Mock legacy IE window object
global.window = {
  document: {
    documentElement: {
      scrollTop: 3,
      scrollLeft: 4,
    },
  },
};

assert.equal(scroll.getScrollY(), 3);
assert.equal(scroll.getScrollX(), 4);
