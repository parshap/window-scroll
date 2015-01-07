# Window Scroll Position

Polyfill for `window.scrollX` and `window.scrollY`.

The implementation comes from jQuery 1.x (supports IE6+). [(1)][1]

[1]: https://github.com/jquery/jquery/blob/835e8c4ae39f09d11ad42d24e0210bebfa8e8320/src/offset.js#L176-L178

## Usage

```js
var scroll = require("window-scroll");
console.log("window.scrollX:", scroll.getScrollX());
console.log("window.scrollY:", scroll.getScrollY());
```

## Installation

```
npm install window-scroll
```
