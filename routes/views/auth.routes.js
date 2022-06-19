const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

const Register = require('../../views/Register');
const Login = require('../../views/Login');
const errorUser = require('../../views/errorUser');
const Error = require('../../views/Error');

router.get('/register', async (req, res) => {
  try {
    const id = req.session.userId;
    const user = await User.findOne({ where: id });
    res.renderComponent(Register, { user });
  } catch (error) {
    console.log(error);
    res.renderComponent(Error);
  }
});

router.post('/register', async (req, res) => {
  try {
    const { name, mail, password } = req.body;
    const existingUser = await User.findOne({ where: { mail } });
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
  } catch (error) {
    console.log(error);
    res.renderComponent(Error);
  }
});

router.get('/login', async (req, res) => {
  res.renderComponent(Login);
});

router.post('/login', async (req, res) => {
  try {
    const { name, password } = req.body;
    const existingUser = await User.findOne({ where: { mail: name } });
    if (existingUser && await bcrypt.compare(password, existingUser.password)) {
      // кладём id нового пользователя в хранилище сессии (логиним пользователя)
      req.session.userId = existingUser.id;
      res.redirect('/Home');
    } else {
      res.renderComponent(errorUser);
    }
  } catch (error) {
    console.log(error);
    res.renderComponent(Error);
  }
});
router.get('/logout', (req, res) => {
  try {
    req.session.destroy((err) => {
      if (err) { console.log(err.message); }
    });
    res.clearCookie('user_sid'); // чистим куки. название берем из app.js : const sessionConfig = {... name: 'user_sid',...}
    // при переходе на ручку /logout очищаем сессию и редеректимся на главную страницу
    res.redirect('/');
  } catch (error) {
    console.log(error);
    res.renderComponent(Error);
  }
});

module.exports = router;
