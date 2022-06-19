require('dotenv').config();
require('@babel/register');
const express = require('express');
const expressConfig = require('./config/express');

// импортируем роутеры 
const mainRouter = require('./routes/views/main.routes');
const authRouter = require('./routes/views/auth.routes');
const albumCreateRouter = require('./routes/views/album.create');
const photoRouter = require('./routes/views/photo.routes');
const zipRouter = require('./routes/views/zip.routes');
const albumRouter = require('./routes/views/album.routes');
const homeRouter = require('./routes/views/home.router');

const app = express();

const { sequelize } = require('./db/models');
const morgan = require('morgan');
// функция настройки экспресса
expressConfig(app);
app.use(express.static(`${__dirname}/../images`));
// подключаем роутеры
app.use(mainRouter); // роутер главной страницы
app.use('/auth', authRouter);
app.use('/album', albumRouter);
app.use('/albumcreate', albumCreateRouter);
app.use('/Home', homeRouter) // роутер домашней страницы
app.use('/photo', photoRouter); // роутер для работы с 1 фотографией
app.use('/zip', zipRouter);

app.use((error, req, res, next) => {
  console.error('Произошла ошибка', error);
  res.status(500).json({
    success: false,
    message: 'Непредвиденная ошибка сервера, попробуйте зайти позже',
  });
});

app.listen(3000, async () => {
  /* eslint-disable no-console */
  console.log('Веб-сервер слушает порт', 3000);

  try {
    await sequelize.authenticate();
    console.log('БД-сервер подключен успешно');
  } catch (error) {
    console.log('БД-сервер не подключен');
    console.log(error.message);
  }
  /* eslint-enable */
});
