# ETHGlobal Website

ethglobal.co

## Installation

Install the dependencies:

### `yarn install`

Install Gatsby globally if you haven't already:

### `npm i -g gatsby`

Run the development server:

### `gatsby develop`

Production build to `/public`:

### `gatsby build`

## Content

Each of the sections in the site are placed in `src/sections`. Refer to the comments there to add content: data has been separated out into objects for complex UI components.

## SEO

A separate component `src/components/common/SEO.js` handles all meta data and SEO content, modify the `SEO_DATA` component to add the data automatically.
