# every-index-of

Simple piece of code tha returns every occurence of a single character in a string by it index.

## Installation

```bash
$ npm install every-index-of
```

# Usage

```js
var evrIndex = require('every-index-of');

let all;

evrIndex('m', 'Common', (err, indexes)=>{
	if (err) { throw err; }

	all = indexes;
})

```

Should return an array like so:

```js
[2,3]
```

## Features

  * Case insensetive
  *return -1 if there are no occurences