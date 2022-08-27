import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

const About = () => {
  return (
    <section className={styles.a_me}>
       <div className={clsx('container', styles.about)}>
        <div>
          <div className={styles.title}>UneMeta</div>
          <div className={styles.dec}>
            <Translate description="about me">UneMeta is a curated social and NFT market space for quality and established IPs and Icons, aiming to create higher quality experience with NFT to everyone.</Translate>
          </div>
          </div>
        <div>
          <div className={styles.sub_title}>UneMeta Club</div>
          <div className={styles.dec}>
            <Translate description="club">UneMeta Club is the research arm of UneMeta, providing the latest insights and updates on NFT & Web3.</Translate>
          </div>
        </div>
      </div>
    </section>
   
  )
}

export default About;