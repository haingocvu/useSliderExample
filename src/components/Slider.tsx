import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

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

function Slider(props: IProps) {
  const { mode, slides } = props;
  const [playing, setPlaying] = useState(false);

  const [currentPlayingIndex, setCurrentPlayingIndex] = useState<number>(0);

  const playStop = () => {
    setPlaying((playing) => !playing);
  };

  const handleNext = () => {
    setCurrentPlayingIndex((prevIndex) => ++prevIndex % slides.length);
  };

  const handlePrev = () => {
    setCurrentPlayingIndex((prevIndex) => {
      const newIndex = --prevIndex;
      return newIndex < 0 ? slides.length - 1 : newIndex;
    });
  };

  useEffect(() => {
    console.log(currentPlayingIndex);
  }, [currentPlayingIndex]);

  return (
    <ImgWrp>
      <StyledImg src={slides[currentPlayingIndex]} />
      <StyledActions>
        <StyledLeft>
          <button onClick={playStop}>{playing ? 'Stop' : 'Play'}</button>
        </StyledLeft>
        <StyledRight>
          <button
            disabled={currentPlayingIndex === 0 && mode === 'N'}
            onClick={handlePrev}
          >
            Prev
          </button>
          <button
            disabled={currentPlayingIndex === slides.length - 1 && mode === 'N'}
            onClick={handleNext}
          >
            Next
          </button>
        </StyledRight>
      </StyledActions>
    </ImgWrp>
  );
}

export default Slider;
