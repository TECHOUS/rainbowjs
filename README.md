<p align="center">
    <img src="./logos/icon100x100.png" alt="rainbowjs logo" />
    <h1 align="center">Rainbow JS</h1>
</p>

Node/Deno JS Minimalist Library for making colorful terminal experiences.

![GitHub release (latest by date)](https://img.shields.io/github/v/release/TechOUs/rainbowjs?style=for-the-badge)
![GitHub package.json version](https://img.shields.io/github/package-json/v/TechOUs/rainbowjs?style=for-the-badge)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/TechOUs/rainbowjs?style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/TechOUs/rainbowjs?style=for-the-badge)
![npm](https://img.shields.io/npm/dw/@techous/rainbowjs?style=for-the-badge)

## Features

* Minimalist library to add colors to terminal
* No need to learn hexadecimal color codes
* Print alphabets on terminal easily using Alphabet library
* Supports Deno JS from GitHub and NPM registry
* Smallest library to build terminal based JS Games

## Installation

```shell
yarn add @techous/rainbowjs
# or
npm install @techous/rainbowjs
```

### Quick Setup

For quickly using this library you can follow the below commands

```shell
# clone the repository
git clone https://github.com/TechOUs/rainbowjs.git

# After this you will get a folder (js module) that you can use in your project
```

## Core Usage

We support the core Rainbow Library for nodejs and denojs mainly

### Node JS

```javascript
// Method 1 : Create Rainbow module object to access the functions
const Rainbow = require('@techous/rainbowjs');
// Use Rainbow.<METHOD>
console.log(Rainbow.checkFormat('blink'));
// OUTPUT : true

// Method 2 : Use function names directly which you want to import
const {checkFormat} = require('#techous/rainbowjs');
console.log(checkFormat('blink'));
// OUTPUT : true
```

### Deno JS

```javascript
// Method 1: Use code directly from github
import {
    checkFormat
} from 'https://raw.githubusercontent.com/TechOUs/rainbowjs/master/src/deno/index.js'
console.log(checkFormat('blink'));
// OUTPUT : true

// Method 2: Use code from npm package cdn
import {
    checkFormat
} from 'https://cdn.skypack.dev/@techous/rainbowjs/deno';
console.log(checkFormat('blink'));
// OUTPUT : true
```

## Alphabet Library Support (Supported from 2.0.0)

We added this new library in version 2.0.0 to print the Alphabets easily on the terminal
that reduces the time to print the alphabets again and again

### Node JS

```javascript
// Method 1 : Create Rainbow module object to access the functions
const Alphabet = require('@techous/rainbowjs/Alphabet');
// Use Alphabet.<METHOD>
Alphabet.printString('#', 'Tests', '  ');
// OUTPUT
// #####   ###    ##   #    ##
//   #    #   #  #    ###  #
//   #    #####   #    #    #
//   #    #        #   #     #
//   #     ####  ##    ##  ##

// Method 2 : Use function names directly which you want to import
const {printString} = require('@techous/rainbowjs/Alphabet');
printString('#', 'Tests', '  ');
// OUTPUT
// #####   ###    ##   #    ##
//   #    #   #  #    ###  #
//   #    #####   #    #    #
//   #    #        #   #     #
//   #     ####  ##    ##  ##
```

### Deno JS

```javascript
// Method 1 : Use the code directly from github
import {
    getString, 
    printString
} from 'https://raw.githubusercontent.com/TechOUs/rainbowjs/master/src/deno/Alphabet.js'
printString('#', 'Tests', '  ');
// OUTPUT
// #####   ###    ##   #    ##
//   #    #   #  #    ###  #
//   #    #####   #    #    #
//   #    #        #   #     #
//   #     ####  ##    ##  ##

// Method 2 : Using npm cdn 
import {
    getString,
    printString
} from 'https://cdn.skypack.dev/@techous/rainbowjs/deno/Alphabet.js'
printString('#', 'Tests', '  ');
// OUTPUT
// #####   ###    ##   #    ##
//   #    #   #  #    ###  #
//   #    #####   #    #    #
//   #    #        #   #     #
//   #     ####  ##    ##  ##
```

## Documentation

Coming Soon!

## Contribution

For contribution guidelines please follow [this guide](https://github.com/TechOUs/rainbowjs/blob/master/.github/CONTRIBUTING.md)

## LICENSE

[![GitHub](https://img.shields.io/github/license/TechOUs/rainbowjs?style=for-the-badge)](LICENSE)