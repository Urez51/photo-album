const React = require('react');
const Layout = require('./Layout');

function AlbumView({ photos, albumName }) {
  return (
    <Layout>
      <form method="POST" action="/:album_id/add">
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
      </form>
    </Layout>
  );
}

module.exports = AlbumView;
