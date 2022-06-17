const React = require('react');
const Layout = require('./Layout');

function Login({user}) {
  return (
    <Layout user={user}>
      <form method="POST" action="/albumcreate">
        <div className="mb-3">
          <label htmlFor="name-input" className="form-label">Title</label>
          <input type="text" className="form-control" id="name-input" name="title" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Body</label>
          <input type="text" className="form-control" id="exampleInputPassword1" name="body" />
        </div>
        <div className="mb-3">
        <input
        type="checkbox"
        name="checkbox"
        className="form-check-input me-1 done-checkbox"
        // defaultChecked={task.done}
        // // кастомный дата-аттрибут
        // data-id={task.id}
      /> Сделать Альбом приватным </div>

        <button type="submit" className="btn btn-primary">Sign in</button>
      </form>
    </Layout>
  );
}

module.exports = Login;
