const React = require('react');
const Layout = require('./Layout');

function errorUser() {
  return (
    <Layout>
      <div><h1 className="mb-1">Такого пользователя нет</h1></div>
    </Layout>
  );
}

module.exports = errorUser;
