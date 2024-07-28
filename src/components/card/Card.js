import React from 'react';
import styles from './Card.module.css'; 

const Card = ({ title, icon, link }) => (
  <div className={styles.card}>
    <a href={link} className={styles.cardLink}>
      <div className={styles.cardIcon}>{icon}</div>
      <div className={styles.cardTitle}>{title}</div>
    </a>
  </div>
);

export default Card;
