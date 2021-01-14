# IW Styles

CSS library from https://www.ironwoods.es projects.

***

### How to use

1. Import the stylesheep on the page header. CSS file available in "dist/css/".
2. Use the CSS classes on your HTML.

Some examples are available on the "examples" directory.

***

### Extends and LESS compilation

To compile Less files i use "node + less watch compiler".
If you has node installed you can run:

    npm install

to do the tool installation.

The "less watch compiler" configuration is on "less-watch-compiler.congig.json".
With the actual configuration the uncompressed CSS will be writed on
"./dist/css/main.css", running the command:

    npm run less-watch

***

Moisés Alcocer, 2020 MIT Licence
https://www.ronwoods.es
