import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero', styles.heroBanner)}>
        <div className="container">
          <img style={{ maxWidth: '100px' }} src={"img/logo.png"} />
          <h1 className="hero__title">Thanks for using Charter!</h1>
          <p className="hero__subtitle">We're excited to be a part of bringing your experience to life.</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/concepts/overview')}>
              Read the docs
            </Link>
          </div>
        </div>
      </header>
    </Layout>
  );
}

export default Home;
