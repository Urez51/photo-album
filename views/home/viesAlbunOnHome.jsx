const React = require('react');
const LayoutHome = require('./LayoutHome');

module.exports = function viesAlbunOnHome({ user, albumsUser, photoInTen }) {
  return (
    <LayoutHome user={user}>
      <div className="bodyHome">
        {albumsUser.map((album, i) => (
          <div key={i} className="card">
            <img src="https://thumbs.dreamstime.com/b/%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0-%D1%84%D0%BE%D1%82%D0%BE%D0%B0%D0%BB%D1%8C%D0%B1%D0%BE%D0%BC%D0%B0-%D1%81-%D0%BE%D0%B4%D0%BD%D0%B8%D0%BC-%D0%BF%D1%83%D1%81%D1%82%D1%8B%D0%BC-%D1%84%D0%BE%D1%82%D0%BE-27530064.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{album.title}</h5>
              <p className="card-text">{album.body}</p>
            </div>
            <div className="card-body">
              <a href={`/album/${album.id}`} className="card-link">Открыть {album.title}</a>
            </div>
          </div>
        ))}
      </div>
      {photoInTen.map((album, i) => (
        <div key={i} id={`album-${i}`} className="carousel slide" data-bs-touch="false" data-bs-interval="false">
          <div className="carousel-inner">
            {album.map((photo, i) => (
              <div key={i} className="carousel-item active kek">
                <img src={photo.url.slice(6)} className="d-block w-100 pricol" alt="..." />
                <div className="op">{photo.title}</div>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev kek" type="button" data-bs-target={`#album-${i}`} data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target={`#album-${i}`} data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      ))}

    </LayoutHome>
  );
};
// {photo.url}
