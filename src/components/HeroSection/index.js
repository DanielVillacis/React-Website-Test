import React, { useState } from 'react';
import { Button } from '../ButtonElement';
import Video from '../../videos/video.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP,HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
      setHover(!hover);
  }

  return (
    <HeroContainer id='home'>
      <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
          <HeroH1>Test title</HeroH1>
          <HeroP>
              Test paragraph. Rick and morty.
          </HeroP>
          <HeroBtnWrapper>
              <Button to='signup' onMouseEnter={onHover} 
              onMouseLeave={onHover}
              primary='true'
              dark='true'
              smooth={true} 
              duration={500} 
              spy={true} 
              exact='true' 
              offset={-80}
              >
                  Get Started {hover ? <ArrowForward /> : <ArrowRight />}
              </Button>
          </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;