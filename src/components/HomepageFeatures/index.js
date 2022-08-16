import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Daily Spotlights',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
   
    <div className={clsx('col col--6', styles.feature_item)}>
      <Link to="/blog" className={styles.feature_item_a}>
        <div className="row">
          <div className={clsx('text--center col col--7')}>
            <Svg className={styles.featureSvg} role="img" />
          </div>
          <div className={clsx("padding-horiz--md col col--5", styles.content_col)}>
            <h3>{title}</h3>
            {/* <p className={styles.dec}>{description}</p> */}
            <div>
              <div className={styles.name}>ume</div>
              <div className={styles.date}>2022.08.15</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
    // <div className={clsx('col col--6')}>
    //   <div className="text--center">
    //     <Svg className={styles.featureSvg} role="img" />
    //   </div>
    //   <div className="text--center padding-horiz--md">
    //     <h3>{title}</h3>
    //     <p>{description}</p>
    //   </div>
    // </div>
    
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.title}>精选内容</div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
