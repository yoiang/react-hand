# react-hand

### Have you ever needed a hand that you could poke and prod and have make different hand signs for your website? 
### Have you ever needed _my_ hand to poke and prod and have make different hand signs for your website?
### Look no further, your search has come to an end 🕺🌵

![EXample](example.gif)

Originally made in vanilla Javascript as a silly school project this was a fun conversion practice into React

## Preinstall

Configure NPM for my Github scoped packages
```sh
npm config set @yoiang:registry https://npm.pkg.github.com/
```

## Install

npm
```sh
npm install @yoiang/react-hand
```

yarn
```sh
yarn add @yoiang/react-hand
```

## Usage

Javascript
```js
const Hand = require('@yoiang/react-hand')
...
<Hand />
```

Typescript
```ts
import Hand from '@yoiang/react-hand'
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
import Hand, { Signs } from '@yoiang/react-hand'

console.log(Signs.getSignNames()) // ["Hand Wave", "The Finger", "Peace Sign"...]

<Hand startSign={Signs.getSignWithName("Hand Wave")} />
```

## Todo
* Use your own hand images
* Add transparency to stock images
* Redo stock images from jpgs taken in 2002 on a cheapy little Pentax 
* _Every_ hand sign known to humans
* Option to disable finger toggle
