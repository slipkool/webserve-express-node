const express = require('express');
const app = express();
const hbs = require('hbs');

const port = process.env.PORT || 3000;

require('./hbs/helpers');

app.use(express.static(__dirname + '/public'));

//Express HBS Engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    //res.send('Hello World');
    /* let salida = {
        nombre: 'jhon',
        edad: 20,
        url: req.url
    }

    res.send(salida); */

    res.render('home', {
        nombre: 'JHON MARTINEZ'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando el puerto ${port}`);
});