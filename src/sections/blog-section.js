/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-header';
import PostCard from 'components/post-card.js';
import ButtonGroup from 'components/button-group';
import Carousel from 'react-multi-carousel';

const data = [
  {
    id: 1,
    imgSrc: 'assets/blog/1.png',
    altText: 'Marketing',
    postLink: 'https://youtu.be/RCN-dBkZ5c4',
    title: 'How to Grow your Account',
    authorName: 'Grow With Alex',
    date: 'Aug 20, 2023',
  },
  {
    id: 2,
    imgSrc: 'assets/blog/2.jpg',
    altText: 'Creative',
    postLink: 'https://youtu.be/gvI8HSMRsZA',
    title: 'The Office: Where are they now?',
    authorName: 'The TV Historian',
    date: 'Sep 1, 2023',
  },
  {
    id: 3,
    imgSrc: 'assets/blog/3.jpg',
    altText: 'Startup',
    postLink: 'https://youtu.be/ZFe8UlqqA3w',
    title: 'Game Designing Advertisement',
    authorName: 'Blueboxx',
    date: 'Aug 12, 2023',
  },
  {
    id: 4,
    imgSrc: 'assets/blog/4.jpg',
    altText: 'Creative',
    postLink: 'https://youtu.be/s72yXTuSv-Q',
    title: 'Andrew Tate vs Elon Musk',
    authorName: 'Controversy Reporter',
    date: 'Aug 31, 2023',
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1310 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1310, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function BlogSection() {
  return (
    <section id='blog' sx={{ variant: 'section.news' }}>
      <Container>
        <SectionHeader
          slogan="our work"
          title="Explore our previous projects to find what you like"
        />

        <Box sx={styles.carouselWrapper}>
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="carousel-container"
            customButtonGroup={<ButtonGroup />}
            dotListClass="test"
            draggable={true}
            focusOnSelect={false}
            infinite={true}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside
            renderDotsOutside={false}
            responsive={responsive}
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
          >
            {data.map((item) => (
              <PostCard
                key={item.id}
                src={item.imgSrc}
                alt={item.altText}
                postLink={item.postLink}
                title={item.title}
                authorName={item.authorName}
                date={item.date}
              />
            ))}
          </Carousel>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  carouselWrapper: {
    '.carousel-container': {
      mx: -3,
    },
  },
};
