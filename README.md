# ColorChange


[![npm Status](https://badgen.net/npm/v/anov-core/?icon=npm)](https://www.npmjs.com/package/anov-core)
[![npm Status](https://badgen.net/npm/license/anov-core)](https://www.npmjs.com/package/anov-core)
[![install size](https://badgen.net/packagephobia/install/anov-core)](https://www.npmjs.com/package/anov-core)
[![publish size](https://badgen.net/packagephobia/publish/anov-core)](https://www.npmjs.com/package/anov-core)
[![total downloads](https://badgen.net/npm/dt/anov-core)](https://www.npmjs.com/package/anov-core)


A lightweight JavaScript to change the main color of images, background images, videos and canvases in the page

[**View demo**](https://coloris.js.org/examples.html)

## Features

* Features
* Zero dependencies
* Very easy to use
* Multiple color formats
* Fully accessible
* Works on all modern browsers (no IE support)

## Install
```javascript
npm install --save color-change
```

## Getting Started
### Basic usage
```html
<img class="cc" src="a.jpeg" />
<div class="cc" style="background:url(b.jpeg)"></div>
<video class="cc" src="c.mp4" ></video>
<canvas class="cc"></canvas>
```
```javascript
import {ColorChange} from 'color-change'
// Select the element you want to change, like document.querySelectorAll
let cc = new ColorChange('.cc')

// Change the color & hue of the element into 'red'
cc.setColor('#ff0000')
```
 
### Specific cases
img color pick:
```javascript
import {ColorPick} from 'color-change'
// Get the main color of the img
let cp = new ColorPick(document.querySelector('img'))
let mainColor=cp.getColor()     // return [r,g,b]
// Get 5 colors in the picture
let colors=cp.getColors(5)      // return [[r,g,b],...]
```

ColorPick + ColorChange:
```javascript
import {ColorChange,ColorPick} from 'color-change'
// Get the main color of the img
let cp = new ColorPick(document.querySelector('img'))
let mainColor=cp.getColor()     
// Change video color to img main color
let cc = new ColorChange('video')
cc.setColor(mainColor)
// cancel change
//cc.clear()
```
## Option
### ColorChange
```javascript
/**
 * ColorChange(el[,isSaturate][,isBrightness])
 *  el: img,background,video,canvas             // Select the element you want to change
 *  isSaturate: bool                            // Turn on color saturation recognition.
 *  isBrightness: bool                          // Turn on color brightness recognition.
 **/ 
let cc =new ColorChange(el,isSaturate,isBrightness)

// function
cc.setColor('#f00') // set color, rgb(255,0,0)| #ff0000 ..
cc.clear()          // clear color
```
### ColorPick
```javascript
/**
 * ColorPick(sourceImage)
 *  sourceImage: img,video,canvas               // Want to get source Image of the color
 **/ 
let cp =new ColorPick(sourceImage)

// function
cp.getColor()                         // get mian color, return [r,g,b]
cp.getColors(8)                             // Get colors, return [[r,g,b],...]
```
## Note
cross domain URLs are not supported !!!

Please enable [cross domain access](https://www.google.com/search?q=access+control+allow+origin) 
of resources on the server or use the proxy 

## License

Copyright (c) 2022 zhu18@vip.qq.com  
**color-change** is licensed under the [MIT license](https://github.com/zhu18/color-change/LICENSE).