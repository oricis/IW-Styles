# IW Styles

CSS library from https://www.ironwoods.es projects.

***

### How to use

1. Import the stylesheet on the page header. CSS file available in "dist/css/".
2. Use the CSS classes on your HTML.
3. Customize the CSS if you need.

Some examples are available on the "examples" directory.

![multi-chek-selectors](https://user-images.githubusercontent.com/7187599/104823897-dd181080-584d-11eb-9ed9-ff20d95f48d8.png)

***

![date-input](https://user-images.githubusercontent.com/7187599/104823898-ddb0a700-584d-11eb-8a2d-ad4ecfd0789b.png)

***

![date-range](https://user-images.githubusercontent.com/7187599/104823899-de493d80-584d-11eb-8e0d-af074539d04a.png)

***

![select-times](https://user-images.githubusercontent.com/7187599/104853031-81f22680-58fe-11eb-802f-012e525cf1e0.png)

***

![filter-selector](https://user-images.githubusercontent.com/7187599/104853028-80c0f980-58fe-11eb-8ece-28ccbc9d4e9b.png)

![filter-selector2](https://user-images.githubusercontent.com/7187599/104853030-81599000-58fe-11eb-8df5-2bf7467f8b67.png)

***

### Extends and LESS compilation

To compile LESS files I use "node + less watch compiler".
If you have node installed you can run:

    npm install

to do the tool installation.

The "less watch compiler" configuration is on "less-watch-compiler.congig.json".
With the actual configuration, the uncompressed CSS will be written on
"./dist/css/main.css", running the command:

    npm run less-watch

***

Moisés Alcocer, 2020 MIT Licence
https://www.ronwoods.es
