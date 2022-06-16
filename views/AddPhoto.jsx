const React = require('react');
const Layout = require('./Layout');

function AddPhoto() {
  return (
    <Layout>
  <form enctype="multipart/form-data" method="post" action="/photo">
   <p>Загрузите ваши фотографии на сервер</p>
   <p><input type="file" name="foto" multiple accept="image/*,image/jpeg"/>
   <input type="submit" value="Отправить"/></p>
  </form>

    </Layout>
  );
}

module.exports = AddPhoto;
