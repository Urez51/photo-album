const React = require('react');
const Layout = require('./Layout');

module.exports = function EditEntry({ photo, user }) {
  return (
    <Layout user={user}>
      <form action="/album/:id" method="POST">
        <div className="edit">
          <h1>Edit photo</h1>
          <input type="text" name="input" value={photo.title} />
          <button type="submit" value="update-photo-title">Edit</button>
        </div>
      </form>
    </Layout>
  );
};
