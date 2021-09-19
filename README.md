# jsmp-infra-alina_lukianytsia-magic_ball

jsmp-infra-alina_lukianytsia-magic_ball - can give you an answer to any question except of alternative.

## Installation

```shell
npm install jsmp-infra-alina_lukianytsia-magic_ball
```

## Usage

#### ES6

```js

import { MagicBall } from 'jsmp-infra-alina_lukianytsia-magic_ball';

// with default values:
const magicBall = new MagicBall();
const answer = magicBall.getAnswer(); // => answer = "It is decidedly so"

// with set values:
const magicBall = new MagicBall(['yes', 'no']);
const answer = magicBall.getAnswer(); // => answer = "yes"
```

#### Node

```js
const { MagicBall } = require('jsmp-infra-alina_lukianytsia-magic_ball');

// with default values:
const magicBall = new MagicBall();
const answer = magicBall.getAnswer(); // => answer = "It is decidedly so"

// with set values:
const magicBall = new MagicBall(['yes', 'no']);
const answer = magicBall.getAnswer(); // => answer = "yes"

```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D
