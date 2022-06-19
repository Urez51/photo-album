const React = require('react');
const Layout = require('./Layout');

function Main() {
  return (
    <Layout>
      <h1 className="mb-1">YOUR PHOTO ALBUM</h1>
      <a className="btn btn-primary btn-xl" href="/auth/register">Registration</a>&nbsp;&nbsp;&nbsp;
      <a className="btn btn-primary btn-xl" href="/auth/login">Login</a>
    </Layout>
  );
}

module.exports = Main;
