import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo.png';
import styles from './Cabecalho.module.css';
import CabecalhoLink from 'components/CabecalhoLink';

function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
        <Link to="./">
            <img src={Logo} alt="Logo do CineTag" />
        </Link>
        <nav>
            <CabecalhoLink url="./">Home</CabecalhoLink>
            <CabecalhoLink url="./favoritos">Favoritos</CabecalhoLink>
        </nav>
    </header>
  )
};

export default Cabecalho;