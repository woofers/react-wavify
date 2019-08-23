

# React Wavify

[![img](https://github.com/woofers/react-wavify/workflows/build/badge.svg)](https://github.com/woofers/react-wavify/actions) [![img](https://david-dm.org/woofers/react-wavify.svg)](https://www.npmjs.com/package/react-wavify) [![img](https://badge.fury.io/js/react-wavify.svg)](https://www.npmjs.com/package/react-wavify) [![img](https://img.shields.io/npm/dt/react-wavify.svg)](https://www.npmjs.com/package/react-wavify) [![img](https://img.shields.io/npm/l/react-wavify.svg)](https://github.com/woofers/react-wavify/blob/master/License.txt)

A simple React component which creates an animated wave.

**[Live Demo](https://jaxson.vandoorn.ca/react-wavify/)**

This component is heavily adapted from [Mikołaj Stolarski](https://github.com/grimor)'s awesome [Codepen](https://codepen.io/grimor/pen/qbXLdN)
and is functionally similar to [Benjamin Grauwin](http://benjamin.grauwin.me/)'s [Wavify](https://github.com/peacepostman/wavify) plug-in.

![img](./screenshots/wave.gif "Wave")


# Installation

**Yarn**

    yarn add react-wavify

**npm**

    npm install react-wavify


# Usage

```jsx
import React from 'react'
import Wave from 'react-wavify'

const App = () => (
  <Wave fill='#f79902'
        paused={false}
        options={{
          height: 20,
          amplitude: 20,
          speed: 0.15,
          points: 3
        }}
  />
)
```

Simply add the Wave component to the React application using JSX.

The wave's width will scale to fit the parent container.


## Props


### Fill

The `fill` property can be set to anything that a SVG path can accept (usually gradients or colors). **Default:** `#FFF`


### Paused

The `paused` property controls the play state of the animation. **Default:** `false`

If set to `true` the wave animation will pause.


### Options

The component supports a variety of options to affect how the wave is rendered.

Any omitted options will be set to the default value.

-   `height` - Height of the wave relative to the SVG element. **Default:** `20`
-   `amplitude` - Amplitude of the rendered wave. **Default:** `20`
-   `speed` - Speed that the wave animation plays at. **Default:** `0.15`
-   `points` - Amount of points used to form the wave.
    Can not be less than `1`. **Default:** `3`
