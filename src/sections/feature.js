/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';

const data = [
  {
    id: 1,
    imgSrc: 'assets/feature/thumbnail.png',
    altText: 'Thumbnails',
    title: 'Captivating Thumbnails',
    text:
      'Not only do we provide an engaging video, we also design a relevant thumbnail that is bound to make your CTRs go through the roof; for free!',
  },
  {
    id: 2,
    imgSrc: '/assets/feature/revision.png',
    altText: 'Revisions',
    title: 'Free Revision',
    text:
      `Although our team is extremely skilful, mistakes are inevitable. However, if you decide something in the video isn't quite right the first revision is on us.`,
  },
  {
    id: 3,
    imgSrc: '/assets/feature/source.png',
    altText: 'Source',
    title: 'Project Files',
    text:
      'If needed, we provide you with all the relevant project files for your order; allowing you to retain full creative control. Extra charges applicable.',
  },
  {
    id: 4,
    imgSrc: '/assets/feature/voice.png',
    altText: 'Voiceovers',
    title: 'Stunning Voicovers',
    text:
      'On special request, we also provide a professional voiceover integration for your video; short and long-form. Extra charges applicable.',
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: 'section.feature' }}>
      <Container>
        <SectionHeader
          slogan="our extras"
          title="One More Thing"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
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
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
