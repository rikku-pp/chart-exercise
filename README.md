Pink Programming exercise - the 'unofficial' gender distribution chart
=================

First of all, remix this app! Remixing will create your own copy of the app that is unique to you -- any changes you make will only apply to your version. Make sure you change the description in your version so you remember what the app does when you're looking at it later

This app is a remix from  [Get Started with DataViz using ChartJs](https://glitch.com/culture/get-started-with-dataviz-using-chart-js/) by Lyzi Diamond. 
More info on ChartJS in the blog post and glitch project in the link. 

## Getting started

# Exercises 

### 1 - Getting started

Before getting into coding, try sketching the diagram on a piece of paper. 
* What parts are there? 
* What measurements are needed?

Then, roll up your sleeves and start coding by altering the starter code: 
* Try changing colors, genders and numbers in `myData.js`
* Try adding a something inside the second chart-container in `index.html`

### 2 - add elements

|Tasks:|Result:|
|---|---|
|in `index.html`|![a circle](https://cdn.glitch.com/d35f0ac3-565e-476e-ba6e-e5b2d0b54490%2Fexerc2.png?1554584365819)

### 3 - style the "tails"

|Tasks:|Result:|
|---|---|
|in `☯.css`|![two half-circles](https://cdn.glitch.com/d35f0ac3-565e-476e-ba6e-e5b2d0b54490%2Fexerc3.png?1554584447638)|

### 4 - style the "heads"

|Tasks:|Result:|
|---|---|
|in `☯.css`|![yin-yan](https://cdn.glitch.com/d35f0ac3-565e-476e-ba6e-e5b2d0b54490%2Fexerc4.png?1554584447806)|

### 5 - adjust chart using data

|Tasks:|Result:|
|---|---|
|in `☯-adjust.js`|![adjusted styling](https://cdn.glitch.com/d35f0ac3-565e-476e-ba6e-e5b2d0b54490%2Fexerc5.png?1554584447724)|

### 6 (extra) - use actual data

in `myData.js`

## Code

The code powering this app structured into: 

**HTML**: `index.html`, 
**CSS**: `style.css`, `☯.css`,
**JavaScript**: `myChartJs.js`, `myData.js`, `☯-adjust.js`

### `index.html`

- The Chart.js JavaScript library is included in `head`
- `body` has two `div` elements with class `.chart-container`
- inside first `.chart-container` div is a `canvas` element with ID `#pieChart`

### `myData.js`

- a `data` object is defined with gender-symbols as keys to percentage-values


### `myChartJs.js`

- a pie chart is initialized and placed in the `pieChart` canvas
  - type: pie chart
  - data: `genders` as labels (sections of the pie), `distribution` as values (width of pie slices), each section has a different color
  

### `style.css`

- set a height, width, margin, and position for the `chart-container` to make charts responsive to different window sizes and platforms

### `☯.css`

- set default styles the custom chart

### `☯-adjust.js`

- adjust custom chart to represent `data`

Solutions
-------------------
* [https://glitch.com/~solutions-pp-chart-exercise](https://glitch.com/~solutions-pp-chart-exercise)

The solution project also features SVG and Canvas versions.

Made by Rikku @PinkProgrammingStockholm
-------------------

\(*￣︶￣)ノｬ

Click `Show` in the header to see your app live. Updates to your code will instantly deploy and update live.

**Glitch** is the friendly community where you'll build the app of your dreams. Glitch lets you instantly create, remix, edit, and host an app, bot or site, and you can invite collaborators or helpers to simultaneously edit code with you.

Find out more [about Glitch](https://glitch.com/about).