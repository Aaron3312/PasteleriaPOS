'use strict';
// Import Models[node_modules]
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import pg from 'pg';
import path from 'path';
import ejsLayouts from 'express-ejs-layouts';
import session from 'express-session';
import passport from 'passport';
import mogran from 'morgan';
import productRoutes from './routes/index.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/api', productRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});



// // Import Models[pastas]
// import passportConfig from './config/passport';
// import routes from './routes';

// const app = express();

// app.use(express.json());

// // Morgan
// app.use(mogran('dev'));

// // Session
// app.use(session({
//      secret: process.env.SESSION_SECRET_KEY,
//      resave: true,
//      saveUninitialized: true,	
// }));

// // PassPort
// passportConfig(passport);
// app.use(passport.initialize());
// app.use(passport.session());

// // Body Parser
// app.use(bodyParser.text());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // view engine setup
// app.use( ejsLayouts );
// app.set( 'views', path.join( __dirname, 'views' ));
// app.set( 'view engine', 'ejs' );

// // static files
// app.use(express.static(path.join( __dirname, '..','public')));

// // Materialize
// app.use(express.static(path.join(__dirname , '..', 'node_modules', 'materialize-css', 'dist')));

// // Rotas
// app.use(routes);

// export default app;