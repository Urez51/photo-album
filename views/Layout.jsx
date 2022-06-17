const React = require('react');

function Layout({ children, user }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <title>Form example</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />

        <link rel="icon" type="image/x-icon" href="/theme/assets/favicon.ico" />
        <script defer src="/photo.js" />
        <script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js" crossOrigin="anonymous" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.5.5/css/simple-line-icons.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,300italic,400italic,700italic" rel="stylesheet" type="text/css" />
        <link href="/theme/css/styles.css" rel="stylesheet" />

        <link rel="stylesheet" type="text/css" href="/style.css" />

      </head>
      <body id="page-top">
        { user && (
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a href="/auth/logout" className="nav-link" tabIndex="-1" role="button" aria-disabled="true">logout</a>
                <p className="nav-link">{user.name}</p>
                <a href="/album" className="nav-link">New Album</a>
              </div>
            </div>
          </div>
        </nav>
        )} {!user && (
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a href="/auth/login" className="nav-link" tabIndex="-1" role="button" aria-disabled="true">Login</a>
                <a href="/" className="nav-link" tabIndex="-1" role="button" aria-disabled="true">Start Page</a>

                <a href="/auth/register" className="nav-link">Registration</a>
              </div>
            </div>
          </div>
        </nav>
        )}
        <header className="masthead d-flex align-items-center">
          <div className="container px-4 px-lg-5 text-center">
            {children}
          </div>
        </header>
      </body>
    </html>
  );
}

module.exports = Layout;
