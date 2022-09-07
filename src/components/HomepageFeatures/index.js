import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';

const FeatureList = [
  {
    title: 'Daily Spotlights',
    date: '2022-09-01',
  },
  {
    title: 'Daily Spotlights',
    date: '2022-08-31',
  },
  {
    title: 'Daily Spotlights',
    date: '2022-08-26',
  },
  {
    title: 'Daily Spotlights',
    date: '2022-08-25',
  },
];

function Feature({Svg, title, description, date}) {
  return (
   
    <div className={clsx('col col--6', styles.feature_item)}>
      <Link to={`/blog/${date}`} className={styles.feature_item_a}>
        <div className={clsx('row', styles.feature_item_row2)}>
          <div className={clsx("padding-horiz--md col col--6", styles.content_col)}>
            <h3 className={styles.i_title}>{title}</h3>
            {/* <p className={styles.dec}>{description}</p> */}
            <div className={styles.i_footer}>
              <div className={styles.name}>une</div>
              <div className={styles.date}>{date}</div>
            </div>
          </div>
          <div className={clsx('text--center col col--6',  styles.banner)}>
            <img src={useBaseUrl('/img/home/banner.png')} alt="" />
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
        <div className={styles.title}>
        <Translate description="d title">
          Daily Spotlights
        </Translate>
        </div>
        <div className={clsx('row', styles.feature_item_row)}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
