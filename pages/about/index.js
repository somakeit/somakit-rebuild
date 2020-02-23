import Head from 'next/head';
import Container from 'react-bootstrap/Container';

import Navigation from '../../components/navigation';


const Home = () => (
  <>
    <Head>
      <title>About | So Make It</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Navigation />

    <Container>
      <h1>About</h1>
      Content here
    </Container>
  </>
);

export default Home;
