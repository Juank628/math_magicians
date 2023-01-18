import React from 'react';
import Calc from '../components/Calc';
import styles from './Calculator.module.css';

export default function Calculator() {
  return (
    <div className={styles.mainContainer}>
      <section className={styles.sectionContainer}>
        <h2>Lets do some math!</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
          corporis vel iusto harum minima fuga, repudiandae molestiae!
          Consequatur nesciunt voluptatem quia tenetur, atque vitae, adipisci
          eligendi rem, ullam totam quaerat.
        </p>
      </section>
      <section className={styles.sectionContainer}>
        <Calc />
      </section>
    </div>
  );
}
