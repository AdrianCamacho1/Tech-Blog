const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helper');

//import sequelize 
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store)

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

const sess = {
    secret: 'Secret Secret Super',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({force: false }).then(() => {
    app.listen(PORT, () => {
        console.log('App listening!');
    });
})

// const express = require('express');
// const path = require('path');
// const routes = require('./routes');
// const session = require('express-session');
// const exphbs = require('express-handlebars');

// // import sequelize connection
// const sequelize = require('./config/connection');
// const SequelizeStore = require('connect-session-sequelize')(session.Store)

// const app = express();
// const PORT = process.env.PORT || 3001;

// const hbs = exphbs.create({ helpers });
// const sess = {
//   secret: 'Secret Secret Super',
//     cookie: {},
//     resave: false,
//     saveUninitialized: true,
//     store: new SequelizeStore({
//         db: sequelize
//     })
// };

// app.use(session(sess));

// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// app.use(routes);

// // sync sequelize models to the database, then turn on the server
// sequelize.sync({ force: false }).then(() => {
// app.listen(PORT, () => {
//   console.log(`App listening on port ${PORT}!`);
// });
// });