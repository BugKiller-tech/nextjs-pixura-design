import Link from 'next/link';
import Head from 'next/head';

import IndexHeader from '../components/IndexHeader';
import IndexSection from '../components/IndexSection';
import IndexFooter from '../components/IndexFooter';

import Test from '../components/Test';

import '../scss/style.scss';
import '../scss/index-page.scss';

const Index = () => (
  <section className="index-page">
    <Head>
      <title>PIXURA</title>
    </Head>
    <IndexHeader />
    <IndexSection />
    <IndexFooter />
    
  </section>
);

export default Index;
