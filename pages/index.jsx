import Head from 'next/head';
import Link from 'next/link';

import Layout, { siteTitle } from '../components/layout/layout';
import utilStyles from '../styles/utils.module.scss';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <Link href="https://nextjs.org/learn">
            <a>our Next.js tutorial</a>
          </Link>
          .)
        </p>
      </section>
    </Layout>
  );
}
