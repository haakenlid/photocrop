[![npm version](https://badge.fury.io/js/%40haakenlid%2Fphotocrop.svg)](https://badge.fury.io/js/%40haakenlid%2Fphotocrop)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# React photo cropping widget

React photo cropper with svg controls.

![what it looks like][example]

Used for parametric image cropping with multiple / unknown output image size.

## Demo

[storybook] demos

## Documentation

nope

## Tests

nope

## Known issues

Uses the [pointer events] api, which is supported by most browsers, but not
Safari. So it requires [pointer events polyfill] to work on apple devices.

Also uses some svg and css features that might not be fully supported by all
browsers. With the PEP polyfill, I think it should work in Chrome and Firefox on
most platforms.

[storybook]: https://haakenlid.github.io/photocrop/
[example]: ./example-image.png
[pointer events]: https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events
[pointer events polyfill]: https://github.com/jquery/PEP
