const router = require('express').Router();
const bcrypt = require('bcrypt');
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const { User } = require('../../db/models');

const Register = require('../../views/Register');
const Login = require('../../views/Login');
const errorUser = require('../../views/errorUser');

router.get('/register', async (req, res) => {
  const id = req.session.userId;
  const user = await User.findOne({ where: id });
  const element = React.createElement(Register, { user});
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
    req.session.userId = user.id;
    res.redirect('/Home');
  }
});

router.get('/login', async (req, res) => {
  // const id = req.session.userId;
  // const user = await User.findOne({ where: id });
  // if(user){
  const element = React.createElement(Login);
  const html = ReactDOMServer.renderToStaticMarkup(element);
  res.write('<!DOCTYPE html>');
  res.end(html)
// }else{
//   const element = React.createElement(Login);
//   const html = ReactDOMServer.renderToStaticMarkup(element);
//   res.write('<!DOCTYPE html>');
//   res.end(html)

});

router.post('/login', async (req, res) => {
  const { name, password } = req.body;
  const existingUser = await User.findOne({ where: { mail: name } });

  if (existingUser && await bcrypt.compare(password, existingUser.password)) {
    // кладём id нового пользователя в хранилище сессии (логиним пользователя)
    req.session.userId = existingUser.id;
    res.redirect('/Home');
  } else {
    const id = req.session.userId;
    // console.log(id);
    const user = await User.findOne({ where: id });
    const element = React.createElement(errorUser, { user });
    const html = ReactDOMServer.renderToStaticMarkup(element);
    res.write('<!DOCTYPE html>');
    res.end(html);
  }
});
router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});
module.exports = router;
