import React from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.container}>
      <h1 className={styles.title}>Math Magicians</h1>
      <ul className={styles.linksList}>
        <li>Home</li>
        <li>Calculator</li>
        <li>Quote</li>
      </ul>
    </nav>
  );
}
