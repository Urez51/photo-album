const React = require('react');
const Layout = require('./Layout');

function Login({ user }) {
  return (
    <Layout user={user}>
      <form method="POST" action="/auth/login">
        <div className="mb-3">
          <label htmlFor="name-input" className="form-label">Email</label>
          <input type="text" className="form-control" id="name-input" name="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" name="password" />
        </div>
        <button type="submit" className="btn btn-primary">Sign in</button>
      </form>
    </Layout>
  );
}

module.exports = Login;
