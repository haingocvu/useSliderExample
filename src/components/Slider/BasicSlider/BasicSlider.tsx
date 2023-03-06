import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { useSlider } from '../../../hooks/useSlider';

const ImgWrp = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`;

const StyledImg = styled.img`
  display: 'inline-block';
  width: 100%;
  height: 250px;
`;

const StyledActions = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledLeft = styled.div``;

const StyledRight = styled.div`
  display: flex;
  gap: 10px;
`;

interface IProps {
  mode: 'I' | 'N';
  slides: Array<string>;
}

function BasicSlider(props: IProps) {
  const { mode, slides } = props;

  const {
    currentIndex,
    isPlaying,
    canGoNext,
    canGoPrev,
    startSlideShow,
    nextSlide,
    prevSlide,
  } = useSlider(slides, 1000, mode);

  useEffect(() => {
    console.log(currentIndex);
  }, [currentIndex]);

  return (
    <ImgWrp>
      <StyledImg src={slides[currentIndex]} />
      <StyledActions>
        <StyledLeft>
          <button onClick={startSlideShow}>
            {isPlaying ? 'Stop' : 'Play'}
          </button>
        </StyledLeft>
        <StyledRight>
          <button disabled={!canGoPrev} onClick={prevSlide}>
            Prev
          </button>
          <button disabled={!canGoNext} onClick={nextSlide}>
            Next
          </button>
        </StyledRight>
      </StyledActions>
    </ImgWrp>
  );
}

export default BasicSlider;
