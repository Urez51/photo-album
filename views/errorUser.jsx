const React = require('react');
const Layout = require('./Layout');


function errorUser({user}) {
  return (
    <Layout user={user}>
      <div><h1 className="mb-1">Такого пользователя нет</h1></div>
    </Layout>
  );
}

module.exports = errorUser;
