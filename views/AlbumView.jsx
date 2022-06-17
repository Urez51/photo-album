const React = require('react');
const Layout = require('./Layout');

function AlbumView({ photos, albumName, user }) {
  return (
    <Layout user={user}>
      {/* // <form enctype="multipart/form-data" method="post" action="/photo">
  //  <p>Загрузите ваши фотографии на сервер</p>
  //  <p><input type="file" name="foto" multiple accept="image/*,image/jpeg"/>
  //  <input type="submit" value="Отправить"/></p>
  // </form> */}

      <form encType="multipart/form-data" method="post" action={`/photo/${albumName.id}`}>
        <p>Загрузите фототографию в альбом</p>
        <p><input className="btn btn-primary" type="file" name="foto" multiple accept="image/*,image/jpeg" />
          <input className="btn btn-primary" type="text" className="form-control" id="name-input" name="title" />
          <input className="btn btn-primary" type="submit" value="Отправить" />
        </p>
      </form>
      <h1>{albumName.title}</h1>
      <div className="mb-3" />
      <ul className="photos">
        {photos.map((el) => (
          <div className="photo" key={el.id}>
            <img src={el.url.slice(6)} alt="" width="200" height="200" />
            <div className="photo-title">{el.title}</div>
            <ul className="photo-links">
              <li className="photo-link"><a className="edit" href={`/album/edit/${el.id}`}>edit</a></li>
              <li className="photo-link"><a className="delete" href={`/album/${el.id}`}>delete</a></li>
            </ul>
          </div>
        ))}
      </ul>

      <form className="btn btn-primary" encType="multipart/form-data" method="post" action={`/zip/${albumName.id}`}>
        <p>Получить Zip архив</p>
        <p><button type="submit">Получить</button></p>
      </form>

      {/* <form method="POST" action="/:album_id/add">
        <h1>{albumName.title}</h1>
        <input type="file" className="btn btn-primary" name="input-foto" value="Загрузить" />
        <div className="mb-3" />
        <ul className="photos">
          {photos.map((el) => (
            <div className="photo" key={el.id}>
              <img src={el.url} alt={el.title} width="200" height="200" />
              <div className="photo-title">{el.title}</div>
              <ul className="photo-links">
                <li className="photo-link"><a className="edit" href={`/album/edit/${el.id}`}>edit</a></li>
                <li className="photo-link"><a className="delete" href={`${el.id}`}>delete</a></li>
              </ul>
            </div>
          ))}
        </ul>
      </form> */}
    </Layout>
  );
}

module.exports = AlbumView;
