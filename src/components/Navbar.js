import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.container}>
      <h1 className={styles.title}>Math Magicians</h1>
      <ul className={styles.linksList}>
        <li><Link to="home">Home</Link></li>
        <li><Link to="calculator">Calculator</Link></li>
        <li><Link to="quotes">Quotes</Link></li>
      </ul>
    </nav>
  );
}
