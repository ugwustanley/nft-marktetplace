import React from "react";
import styles from './testing.module.scss'
import { ArrowRight } from 'phosphor-react'

const Testing = () => {
  return (
    <div className={styles.container}>
      <h1>H1 Hello</h1>
      <h2>H2 Hello</h2>
      <h3>H3 hello</h3>
      <h4>H4 hello</h4>
      <h5>H5 hello</h5>
      <h6>H6 Hello</h6>

      <ArrowRight size={32} />
    </div>
  );
};

export default Testing;
