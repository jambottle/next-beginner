import Head from 'next/head';
import Link from 'next/link';

import Layout from '../../components/Layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
        <meta name="author" content="Chris Mills" />
        <meta
          name="description"
          content="The MDN Web Docs Learning Area aims to provide complete beginners to the Web with all they need to know to get started with developing web sites and applications."
        />
      </Head>

      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}
