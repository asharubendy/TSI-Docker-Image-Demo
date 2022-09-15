const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(express.static('.'));

app.get('/', (req, res) => {
  res.send(`
    <html lang="en">
        <link rel="stylesheet" href="styles.css">
    <head>
        <title>Hello world, but containerise it!</title>
    </head>
        <body>
            <section>
                <h2>TSI Demo node application for the docker course</h2>
                <h3>Creating Images!</h3>
            </section>
        </body>
    </html>
  `);
});

app.listen(1200);
