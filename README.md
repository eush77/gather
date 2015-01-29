[![npm](https://nodei.co/npm/gather.png)](https://nodei.co/npm/gather/)

# gather

[![Build Status][travis-badge]][travis] [![Dependency Status][david-badge]][david]

Control flow utility that runs a callback after all the dependencies are (asynchronously) met. Useful when a function depends on some resources that are obtained asynchronously and independently.

[travis]: https://travis-ci.org/eush77/gather
[travis-badge]: https://travis-ci.org/eush77/gather.svg
[david]: https://david-dm.org/eush77/gather
[david-badge]: https://david-dm.org/eush77/gather.png

## Example

```js
var foo = gather(function (a, b) {
  console.log(a + b);
});

async(function () {
  async(function () {
    done('foo', undefined);
  });
});

async(function () {
  done(undefined, 'bar');
});

// Prints "foobar".
```

## API

### `feed = gather(done)`

Returns a function that can feed results to `done`.

Pass arguments as they become ready, interleaving with `undefined` for not-yet-resolved ones. The order and total count matter.

Once all the arguments are supplied, `done` is finally called.

## Install

```shell
npm install gather
```

## License

MIT
