# ETHGlobal Website

ethglobal.co

## Installation

Install the dependencies:

### `yarn install`

Run the development server:

### `yarn dev`

Production build to `/public`:

### `yarn build`

## Content

Each of the sections in the site are placed in `src/sections`. Refer to the comments there to add content: data has been separated out into objects for complex UI components.

## SEO

The component `src/components/common/SEO.js` handles all meta data and SEO content, modify the `SEO_DATA` variable to add the data automatically.
