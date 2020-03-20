# doomsday-clock [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/doomsday-clock/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/doomsday-clock)

Get the time until midnight according to the Doomsday Clock.

[![NPM Badge](https://nodei.co/npm/doomsday-clock.png)](https://npmjs.com/package/doomsday-clock)

## Install

```sh
npm install doomsday-clock
```

## Usage

```js
const doomsdayClock = require("doomsday-clock");

(async () => {
	const { seconds } = await doomsdayClock();
	console.log(`There are ${seconds} seconds 'till midnight!`);
})();
```

## API

### doomsdayClock()

#### Return data

##### seconds

Type: `number`

The amount of seconds left.

##### source

Type: `string`

The statement that the minutes were sourced from.

##### time

Type: `string`

The amount of time left as represented as `HH:mm:ss A`.

## Migrating from v1

- Node.js 10 or later is now required.
- Support for callbacks have been removed.
- The `seconds` value is now provided instead of `minutes`.
