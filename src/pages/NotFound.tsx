import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Notfound | Lisomar Barbosa | Direito Digital e Proteção de Dados</title>
        <meta name="description" content="Direito Digital, LGPD, proteção de dados e tecnologia." />
        <link rel="canonical" href="https://www.lisomarbarbosa.adv.br/notfound" />
        <meta name="robots" content="index, follow" />

        <meta property="og:site_name" content="Lisomar Barbosa | Direito Digital" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.lisomarbarbosa.adv.br/notfound" />
        <meta property="og:image" content="https://www.lisomarbarbosa.adv.br/og-image.jpg" />
        <meta property="og:title" content="Notfound | Lisomar Barbosa | Direito Digital e Proteção de Dados" />
        <meta property="og:description" content="Direito Digital, LGPD, proteção de dados e tecnologia." />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Notfound | Lisomar Barbosa | Direito Digital e Proteção de Dados" />
        <meta name="twitter:description" content="Direito Digital, LGPD, proteção de dados e tecnologia." />
        <meta name="twitter:image" content="https://www.lisomarbarbosa.adv.br/og-image.jpg" />
      </Helmet>
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">404</h1>
          <p className="mb-4 text-xl text-gray-600">Oops! Page not found</p>
          <a href="/" className="text-blue-500 underline hover:text-blue-700">
            Return to Home
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;