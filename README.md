# react-hand

## Have you ever needed a hand that you could poke and prod and have make different hand signs for your website? 
## Have you ever need _my_ hand to poke and prod and have make different hand signs for your website?
## Look no further, your search has come to an end 🕺🌵

Originally made in vanilla Javascript as a silly school project this was a fun conversion practice into React

## Install

npm
```sh
npm install @adorkable/react-hand
```

yarn
```sh
yarn add @adorkable/react-hand
```

## Usage

Javascript
```js
const Hand = require('@adorkable/react-hand')
...
<Hand />
```

Typescript
```ts
import Hand from '@adorkable/react-hand'
...
<Hand />
```

* Mouse over a digit to toggle
* Click a digit to lock the toggle 

### Properties

`showInformation` - **boolean** (_false_) - Whether to show information about recognized hand signs
```js
<Hand showInformation={true} />
```

`startSign` - **Sign** (_undefined_) - Start off with a specific hand sign
```js
import Hand, { Signs } from '@adorkable/react-hand'

console.log(Signs.getSignNames()) // ["Hand Wave", "The Finger", "Peace Sign"...]

<Hand startSign={Signs.getSignWithName("Hand Wave")} />
```