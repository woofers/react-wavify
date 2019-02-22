React Wavify
===========

![img](https://david-dm.org/woofers/react-wavify.svg) ![img](https://badge.fury.io/js/react-wavify.svg) ![img](https://img.shields.io/npm/dt/react-wavify.svg) ![img](https://img.shields.io/npm/l/react-wavify.svg)

A simple React component which creates an animated wave.

This component is heavily adapted from [Mikołaj Stolarski](https://github.com/grimor)'s awesome [Codepen](https://codepen.io/grimor/pen/qbXLdN)
and is functionally similar to [Benjamin Grauwin](http://benjamin.grauwin.me/)'s [Wavify](https://github.com/peacepostman/wavify) plug-in.


# Installation

**Yarn**

    yarn add react-wavify

**npm**

    npm install react-wavify


# Usage

```js
import React, { Component } from "react"
import Wave from 'react-wavify'

class Application extends Component {
  render () {
    return (
      <div>
        <Wave fill='#f79902'
              options={{
                height: 20,
                amplitude: 20,
                speed: 0.15,
                points: 3
              }}
        />
      </div>
    )
  }
}
```

Simply add the Wave component to the React application using JSX.

The wave's width will scale to fit the parent container.


## Props


### Fill

The `fill` property can be set to anything that a SVG path can accept (usually gradients or colors).


### Options

The component supports a variety of options to affect how the wave is rendered.

Any omitted options will be set to the default value.

-   `height` - Height of the wave relative to the SVG element. **Default:** `20`
-   `amplitude` - Amplitude of the rendered wave. **Default:** `20`
-   `speed` - Speed that the wave animation plays at. **Default:** `0.15`
-   `points` - Amount of points used to form the wave.
    Can not be less than `1`. **Default:** `3`
