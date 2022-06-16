const React = require('react');
const Layout = require('./Layout');

function AddZip() {
  return (
    <Layout>
  <form enctype="multipart/form-data" method="post" action="/zip">
   <p>Получить Zip архив</p>
   <label for="file">Upload Files:</label>
   <input type="form-control" type="file" name="file"/>
   <p><button type="submit">Получить</button></p>
  </form>

    </Layout>
  );
}

module.exports = AddZip;
