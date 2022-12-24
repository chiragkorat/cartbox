import React from 'react';

import Button from '../../components/Button/Link';
import Hero from '../../components/Home/Hero';
import ProductsHighlighted from '../../components/Home/Products/Highlighted';
import ProductsPopular from '../../components/Home/Products/Popular';
import Panel from '../../components/Panel';
import Subscribe from '../../components/Subscribe';
import { Layout } from '../../layout';

const Home: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <ProductsHighlighted />
      <ProductsPopular />
      <Subscribe />
      <Panel
        image="https://images.unsplash.com/photo-1603204077809-d94bb1ea0fad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        direction="right"
        title="From a studio in London to a global brand with
        over 400 outlets"
        description="
        When we started Cartbox, the idea was simple. Make high quality furniture affordable and available for the mass market. <br> <br> Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.
        "
        actions={<Button title={'Get in touch'} href={'#'} isLoading={false} />}
      />
    </Layout>
  );
};

export default Home;
