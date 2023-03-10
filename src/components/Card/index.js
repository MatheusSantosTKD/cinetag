import styles from './Card.module.css';
import iconeDesFavoritar from './desfavoritar.png';
import iconeFavoritar from './favoritar.png';
import React from 'react';
import { useFavoritoContext } from 'contextos/Favoritos';
import { Link } from 'react-router-dom';


export default function Card({ id, titulo, capa }) {
  const { favorito, adicionarFavorito } = useFavoritoContext();
  const ehFavorito = favorito.some((fav) => fav.id === id);
  const icone = ehFavorito ? iconeDesFavoritar : iconeFavoritar;
  return (

    <div className={styles.container}>
      <Link className={styles.link} to={`/${id}`}>
        <img src={capa} alt={titulo} className={styles.capa} />
        <h2>{titulo}</h2>
        <img src={icone} 
            alt="Favoritar filme"
            className={styles.favoritar}
            onClick={() => {
              adicionarFavorito({ id, titulo, capa })
            }}
        />
      </Link>
    </div>
  )
}

