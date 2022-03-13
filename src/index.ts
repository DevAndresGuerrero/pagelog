import path from 'path';
import express from 'express';

// Importing routes
import IndexRoutes from './routes/index';
import BooksRoutes from './routes/books';
import PagesRoutes from './routes/pages';

// Initializations
const app = express();
import './database';

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/', IndexRoutes);
app.use('/books', BooksRoutes);
app.use('/pages', PagesRoutes);

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server online in http://localhost:${app.get('port')}`);
});
