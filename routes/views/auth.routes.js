const router = require('express').Router();
const bcrypt = require('bcrypt');
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const { User } = require('../../db/models');

const Register = require('../../views/Register');
const Login = require('../../views/Login');

router.get('/register', (req, res) => {
  const element = React.createElement(Register, {});
  const html = ReactDOMServer.renderToStaticMarkup(element);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

router.post('/register', async (req, res) => {
  const { name, mail, password } = req.body;
  const existingUser = await User.findOne({ where: { mail } });
  // проверяем есть ли уже такой пользователь в БД
  if (existingUser) {
    res.send('Такой пользователь уже существует.');
  }

  if (!existingUser) {
    const user = await User.create({
      name,
      mail,
      password: await bcrypt.hash(password, 10),
    });
    // console.log(user);
    req.session.userId = user.id;
    // console.log(req.session);
    res.redirect('/Home');
  }
});

router.get('/login', (req, res) => {
  const element = React.createElement(Login, {});
  const html = ReactDOMServer.renderToStaticMarkup(element);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

router.post('/login', async (req, res) => {
  const { name, password } = req.body;
  const existingUser = await User.findOne({ where: { name } });

  if (existingUser && await bcrypt.compare(password, existingUser.password)) {
    // кладём id нового пользователя в хранилище сессии (логиним пользователя)
    req.session.userId = existingUser.id;
    res.redirect('/Home');
  } else {
    res.send('Неверное имя пользователя или пароль.');
  }
});
router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});
module.exports = router;
