/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Box, Flex, Button } from 'theme-ui';
import { Link } from 'react-scroll';
import { keyframes } from '@emotion/react';
import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import PriceCard from 'components/price-card';
import ButtonGroup from 'components/button-group';
import SectionHeader from 'components/section-header';
import { IoIosCheckmarkCircle, IoIosCloseCircle, IoIosPeople } from 'react-icons/io';

const packages = {
  monthly: [
    {
      id: 1,
      name: 'TikToks, Shorts & Reels',
      description: 'For the trendy creators',
      buttonText: 'Order Now',
      priceWithUnit: '£15',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: '30-60 Seconds Runtime',
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: "Accurate Subtitles",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: 'Dynamic Transitions',
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: 'Music Integration',
          isAvailable: true,
        },
      ],
    },
    {
      id: 2,
      // header: 'Popular',
      name: 'YouTube Essentials',
      description: 'For the traditional YouTubers',
      priceWithUnit: '£50',
      buttonText: 'Order Now',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: 'Upto 10 Minutes Runtime',
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: "Accurate Subtitles",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: 'High Quality B-Roll',
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: 'Music Integration',
          isAvailable: true,
        },
        {
          id: 5,
          icon: <IoIosCheckmarkCircle />,
          text: 'Engaging Thumbnail',
          isAvailable: true,
        },
        {
          id: 6,
          icon: <IoIosCloseCircle />,
          text: 'Priority Assistance',
          isAvailable: false
        }
      ],
    },
    {
      id: 3,
      header: 'Suggested',
      headerIcon: <IoIosCheckmarkCircle />,
      name: 'YouTube Elite',
      description: 'For the visionary producers',
      priceWithUnit: '£100',
      buttonText: 'Order Now',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: 'Upto 25 Minutes Runtime',
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: "Animated Subtitles",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: 'Advanced VFx and Colour Grading',
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: 'Priority Assistance',
          isAvailable: true,
        },
        {
          id: 5,
          icon: <IoIosCheckmarkCircle />,
          text: 'Everything in Essentials',
          isAvailable: true,
        },
      ],
    },
  ],
  annual: [
    {
      id: 1,
      name: 'TikToks, Shorts & Reels',
      description: 'For the trendy creators',
      buttonText: 'Order Now',
      priceWithUnit: '£13',
      anotherOption: 'Minimum Order: 8 Videos',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: '30-60 Seconds Runtime',
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: "Accurate Subtitles",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: 'Dynamic Transitions',
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: 'Music Integration',
          isAvailable: true,
        },
      ],
    },
    {
      id: 2,
      // header: 'Popular',
      headerIcon: <IoIosPeople />,
      name: 'YouTube Essentials',
      description: 'For the traditional YouTubers',
      priceWithUnit: '£45',
      buttonText: 'Order Now',
      anotherOption: 'Minimum Order: 5 Videos',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: 'Upto 10 Minutes Runtime',
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: "Accurate Subtitles",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: 'High Quality B-Roll',
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: 'Music Integration',
          isAvailable: true,
        },
        {
          id: 5,
          icon: <IoIosCheckmarkCircle />,
          text: 'Engaging Thumbnail',
          isAvailable: true,
        },
        {
          id: 6,
          icon: <IoIosCloseCircle />,
          text: 'Priority Assistance',
          isAvailable: false
        }
      ],
    },
    {
      id: 3,
      header: 'Suggested',
      headerIcon: <IoIosCheckmarkCircle />,
      name: 'YouTube Elite',
      description: 'For the visionary producers',
      priceWithUnit: '£89',
      buttonText: 'Order Now',
      anotherOption: 'Minimum Order: 4 Videos',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: 'Upto 25 Minutes Runtime',
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: "Animated Subtitles",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: 'Advanced VFx and Colour Grading',
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: 'Priority Assistance',
          isAvailable: true,
        },
        {
          id: 5,
          icon: <IoIosCheckmarkCircle />,
          text: 'Everything in Essentials',
          isAvailable: true,
        },
      ],
    },
  ],
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    draggable: false,
  },
  tablet: {
    breakpoint: { max: 1023, min: 640 },
    items: 2,
    draggable: true,
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    draggable: true,
  },
};

export default function Package() {
  const { monthly, annual } = packages;
  const [state, setState] = useState({
    active: 'monthly',
    pricingPlan: monthly,
  });

  const handlePricingPlan = (plan) => {
    if (plan === 'annual') {
      setState({
        ...state,
        active: 'annual',
        pricingPlan: annual,
      });
    } else {
      setState({
        ...state,
        active: 'monthly',
        pricingPlan: monthly,
      });
    }
  };

  const sliderParams = {
    additionalTransfrom: 0,
    arrows: false,
    autoPlaySpeed: 3000,
    centerMode: false,
    className: '',
    slidesToSlide: 1,
    items: 3,
    containerClass: 'carousel-container',
    customButtonGroup: <ButtonGroup />,
    dotListClass: '',
    focusOnSelect: false,
    infinite: false,
    keyBoardControl: false,
    itemClass: '',
    minimumTouchDrag: 80,
    renderButtonGroupOutside: true,
    renderDotsOutside: false,
    responsive: responsive,
    showDots: false,
    sliderClass: '',
  };

  return (
    <section id="pricing" sx={{ variant: 'section.pricing' }}>
      <Container>
        <SectionHeader
          slogan="Whats the cost"
          title="Our Price is Right"
        />
        <Flex sx={styles.buttonGroup}>
          <Box sx={styles.buttonGroupInner}>
            <button
              className={state.active === 'monthly' ? 'active' : ''}
              type="button"
              aria-label="Monthly"
              onClick={() => handlePricingPlan('monthly')}
            >
              Taste Test
            </button>
            <button
              className={state.active === 'annual' ? 'active' : ''}
              type="button"
              aria-label="Annual"
              onClick={() => handlePricingPlan('annual')}
            >
              Mega Munch
            </button>
          </Box>
        </Flex>
        <Box sx={styles.pricingWrapper} className="pricing__wrapper">
          <Carousel {...sliderParams}>
            {state.pricingPlan.map((packageData) => (
              <Box
                sx={styles.pricingItem}
                key={`${state.active}-card--key${packageData.id}`}
              >
                <PriceCard data={packageData} />
              </Box>
            ))}
          </Carousel>
        </Box>
        <br></br>
        <Link
        smooth={true}
        duration={400}
        to={'quote'}
        offset={-180}>
          <Button
              className="donate__btn"
              variant="secondary"
              aria-label="Get Started"
              // onClick={quote}
              sx={styles.button}
          >
              Get a Quote
          </Button>
        </Link>
      </Container>
    </section>
  );
}

function quote() {
  if (window !== "undefined") window.scrollTo({left: 0, top: 7900, behaviour: 'smooth'})
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
		transform: translateY(0);
    opacity: 1;
  }
`;
const styles = {
  '.donate__btn': {
    flexShrink: 0,
    mr: [15, 20, null, null, 0],
    ml: ['auto', null, null, null, 0],
  },
  pricingWrapper: {
    mb: '-40px',
    mt: '-40px',
    mx: -3,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    '&.pricing__wrapper .package__card': {
      '.package__header': {
        animation: `${fadeIn} 0.8s ease-in`,
      },
      'ul > li': {
        animation: `${fadeIn2} 0.7s ease-in`,
      },
      '.package__price': {
        animation: `${fadeIn2} 0.9s ease-in`,
      },
      button: {
        animation: `${fadeIn2} 1s ease-in`,
      },
    },
    '.carousel-container': {
      width: '100%',
      '> ul > li ': {
        display: 'flex',
      },
    },
    '.button__group': {
      display: ['flex', null, null, null, 'none'],
      mb: [4, null, null, null, 0],
    },
  },
  pricingItem: {
    mx: 3,
    display: 'flex',
    flexShrink: 0,
    flex: '1 1 auto',
  },
  buttonGroup: {
    justifyContent: 'center',
    mb: '7',
    mt: ['-15px', '-35px'],
    position: 'relative',
    zIndex: 2,
  },
  buttonGroupInner: {
    display: 'flex',
    padding: '7px',
    margin: '0 auto',
    borderRadius: '5px',
    backgroundColor: '#F7F8FB',
    button: {
      border: 0,
      padding: ['15px 20px', '15px 27px'],
      borderRadius: '5px',
      color: 'text',
      fontSize: [1, 2],
      lineHeight: 1.2,
      fontWeight: 500,
      backgroundColor: 'transparent',
      cursor: 'pointer',
      fontFamily: 'body',
      letterSpacing: '-0.24px',
      transition: 'all 0.3s',
      '&.active': {
        color: '#0f2137',
        backgroundColor: '#ffffff',
        boxShadow: '0 3px 4px rgba(38, 78, 118, 0.1)',
      },
      '&:focus': {
        outline: 0,
      },
    },
  },
  button: {
    display: 'flex',
    padding: '7px',
    margin: '0 auto',
    button: {
      color: 'text',
      fontWeight: 500,
      backgroundColor: 'transparent',
      cursor: 'pointer',
      fontFamily: 'body',
      fontSize: [1,2],
      lineHeight: 1.2,
      letterSpacing: '-0.24px',
      transition: 'all 0.3s',
      '&.active': {
        color: '#0f2137',
        backgroundColor: '#ffffff',
        boxShadow: '0 3px 4px rgba(38, 78, 118, 0.1)',
      },
      '&:focus': {
        outline: 0,
      },
    },
  },
};

//TODO: Add purchase functionality to buttons