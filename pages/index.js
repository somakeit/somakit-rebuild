import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import Navigation from '../components/navigation';


const Home = () => (
  <>
    <Head>
      <title>My page title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Navigation />
    <Jumbotron fluid>
      <Container>
        <h1>Workshop and Hub for Creative Hobbyists</h1>
        <p>
          Non-profit community space and workshop for makers, developers, tinkerers and artists. Visit us on a Tuesday
          evening to see what we're about!
        </p>
        <p>
          <Link href='/visit'><Button variant="primary">Visit Southampton Makerspace</Button></Link>
        </p>
      </Container>
    </Jumbotron>
    <Container>
      <h2>Southampton Makerspace</h2>
      <p>So Make It is a non-profit MakerSpace in Southampton, UK – a friendly and inclusive place for people who like
        making things to sharing knowledge, experience and tools.</p>

      <p>The interests of the current membership focus on subjects of wood- and metal-work, costume design, craft,
        photography and technology (3D printing, microcontrollers (Arduino, etc), robotics, quad-copters, home
        automation,
        computers (Raspberry Pi, etc) and programming). We have a significant number of tools available to facilitate
        these activities and our members are often willing to lend their own personal tools too.</p>

      <p>Membership is not required to use the space, please just pop in during our Opening Hours and see what we’re
        about;
        hopefully you might consider joining us on our journey to bring maker-culture to everyone!</p>

      <blockquote>* Excellent * Inspirational * A fun learning experience * Great atmosphere * Really friendly & very
        approachable *
      </blockquote>

      — Just a few comments from recent visitors
    </Container>
  </>
);

export default Home;
