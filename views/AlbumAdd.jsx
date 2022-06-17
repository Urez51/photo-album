const React = require('react');
const Layout = require('./Layout');

function AlbumAdd() {
  return (
    <Layout>
      <form method="POST" action="/:album_id/add">
        <h1>Create new album</h1>
        <label htmlFor="">Album title</label>
        <input type="text" className="btn btn-primary" name="create-title" />
        <label htmlFor="">Album description</label>
        <input type="text" className="btn btn-primary" name="create-body" />
        <label htmlFor="">Private album</label>
        <input type="checkbox" className="btn btn-primary" name="create-private" />
      </form>
    </Layout>
  );
}

module.exports = AlbumAdd;
