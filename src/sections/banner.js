/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Image, Button } from 'theme-ui';
import { Link } from 'react-scroll';
// banner-thumb.png

export default function Banner() {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            Content Creation Without The Hassle
          </Heading>
          <Text as="p" variant="heroSecondary">
          Bring your wildest concepts to life without the burden of managing the intricate behind-the-scenes tasks. 
          We handle the meticulous groundwork, ensuring your viewers experience the flawless video you envision.
          </Text>
          <Link 
          to={'services'}
          smooth={true}
          duration={600}
          offset={-150}
          >
            <Button variant="primary">Explore</Button>
          </Link>
        </Box>

        <Box sx={styles.banner.imageBox}>
          <Image src={'/assets/timeline.png'} alt="banner" />
        </Box>
      </Container>
    </section>
  );
}

function explore(){
  if(window !== "undefined") window.scrollTo(0, 1600)
}

const styles = {
  banner: {
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    zIndex: 2,
    '&::before': {
      position: 'absolute',
      content: '""',
      bottom: 6,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url(/assets/shape-left.png)`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom left',
      backgroundSize: '36%',
    },
    '&::after': {
      position: 'absolute',
      content: '""',
      bottom: '40px',
      right: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url(/assets/shape-right.png)`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom right',
      backgroundSize: '32%',
    },
    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    contentBox: {
      width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
      mx: 'auto',
      textAlign: 'center',
      mb: ['40px', null, null, null, null, 7],
    },
    imageBox: {
      justifyContent: 'center',
      textAlign: 'center',
      display: 'inline-flex',
      mb: [0, null, -6, null, null, '-40px', null, -3],
      img: {
        position: 'relative',
        height: [245, 'auto'],
      },
    },
  },
};
