import Link from 'next/link';
import Head from 'next/head';

import { Layout } from '../../components/index';

const FirstPost = () => {
  return (
    <Layout>
      <Head>
        <title>Good title!</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back</a>
        </Link>
      </h2>
    </Layout>
  );
};

export default FirstPost;
