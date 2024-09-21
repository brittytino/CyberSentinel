import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>CyberSentinel</title>
        <meta name="description" content="Web Scraping-Intelligent Vulnerability Monitoring and Protection" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to CyberSentinel</h1>
        <nav>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/products">Products</Link>
          <Link href="/vulnerabilities">Vulnerabilities</Link>
          <Link href="/settings">Settings</Link>
        </nav>
      </main>
    </div>
  );
};

export default Home;
