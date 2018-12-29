powerset
========
[![Build Status](https://travis-ci.com/amilajack/powerset.svg?branch=master)](https://travis-ci.com/amilajack/powerset)

A [powerset](https://en.wikipedia.org/wiki/Power_set) utility for Node

## Installation

```bash
npm install @amilajack/powerset
```

## Usage

```js
import powerset from '@amilajack/powerset';

powerset([1, 2, 3]);
// [[], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]]
```

