/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from '../components/feature-card-column.js';

const data = [
  {
    id: 1,
    imgSrc: 'assets/key-feature/performance.svg',
    altText: 'Fast Performance',
    title: 'Fast Performance',
    text:
      'We pride ourselves on providing you the perfect video swiftly, without compromise.',
  },
  {
    id: 2,
    imgSrc: 'assets/key-feature/subscription.svg',
    altText: 'Pro Quality',
    title: 'Professional Quality',
    text:
      'Our highly talented editors always provide a video that meets, if not exceeds expectations.',
  },
  {
    id: 3,
    imgSrc: 'assets/key-feature/partnership.svg',
    altText: 'Good Prices',
    title: 'Affordable Prices',
    text:
      'Our services are provided at rates that you simply cannot find elsewhere.',
  },
  {
    id: 4,
    imgSrc: 'assets/key-feature/support.svg',
    altText: 'Customer Support',
    title: 'Customer Support',
    text:
      'All your issues are resolved quickly and accurately by a human correspondent.',
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id="feature">
      <Container>
        <SectionHeader
          slogan="Why choose us"
          title="Quality Features, Amazing Service"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
