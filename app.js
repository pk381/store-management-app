const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const sequelize = require('./util/database');

const notFoundController = require('./controllers/not_found');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(bodyParser.json());

// static files
app.use(express.static(path.join(__dirname, 'public')));

// shop route
app.use(shopRoutes);

// page not found
app.use(notFoundController.notFound);


sequelize.sync()
.then(res=>{
    console.log("listening");
    app.listen(4000);
})
.catch(err=>{
    console.log(err);
})


