import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css';

/**
 * React component to create the error page when URL is incorrect
 * @returns { React.ReactElement } Error page
 */
function Error() {
   return (
      <main className="error_wrapper">
         <h2 className="error_number">Erreur</h2>
         <p className="error_description">
            La page que vous recherchez n'existe pas.
         </p>
         <Link className="error_homelink" to="/">
            Retourner sur la page d'accueil
         </Link>
      </main>
   );
}

export default Error;
