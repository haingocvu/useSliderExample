import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { useSlider } from '../../../hooks/slides/useSlider';

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
    toggleSlideShow,
    goNext,
    goPrev,
  } = useSlider(slides, 1000, mode);

  useEffect(() => {
    console.log(currentIndex);
  }, [currentIndex]);

  return (
    <ImgWrp>
      <StyledImg src={slides[currentIndex]} />
      <StyledActions>
        <StyledLeft>
          <button onClick={toggleSlideShow}>
            {isPlaying ? 'Stop' : 'Play'}
          </button>
        </StyledLeft>
        <StyledRight>
          <button disabled={!canGoPrev} onClick={goPrev}>
            Prev
          </button>
          <button disabled={!canGoNext} onClick={goNext}>
            Next
          </button>
        </StyledRight>
      </StyledActions>
    </ImgWrp>
  );
}

export default BasicSlider;
