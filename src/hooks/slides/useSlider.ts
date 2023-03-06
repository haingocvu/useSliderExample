import { useState, useRef, useMemo, useEffect } from 'react';

import { useInterval } from '../timer/useInterval';

interface ReturnPayload {
  isPlaying: boolean;
  currentIndex: number;
  toggleSlideShow: () => void;
  goNext: () => void;
  goPrev: () => void;
  canGoNext: boolean;
  canGoPrev: boolean;
}

export const useSlider = (
  slides: Array<string>,
  interval: number,
  mode: 'N' | 'I'
): ReturnPayload => {
  // body
  const [playing, setPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { startInterval, stopInterval } = useInterval(interval, () => {
    setCurrentIndex((index) => {
      const nextIndex = ++index;
      return nextIndex >= slideLength ? 0 : nextIndex;
    });
  });

  const slideLength = slides.length;

  const toggleSlideShow = () => {
    setPlaying((playing) => !playing);
  };

  useEffect(() => {
    if (playing) {
      startInterval();
      return;
    }
    stopInterval();
  }, [playing]);

  const goNext = () => {
    setCurrentIndex((index) => {
      const newIndex = ++index;
      return newIndex >= slideLength
        ? mode === 'I'
          ? 0
          : slideLength - 1
        : newIndex;
    });
  };

  const goPrev = () => {
    setCurrentIndex((index) => {
      const newIndex = --index;
      return newIndex < 0 ? (mode === 'I' ? slideLength - 1 : 0) : newIndex;
    });
  };

  const canGoNext = useMemo(() => {
    return mode === 'I' || currentIndex < slideLength - 1;
  }, [mode, currentIndex, slides]);

  const canGoPrev = useMemo(() => {
    return mode === 'I' || currentIndex > 0;
  }, [mode, currentIndex]);

  return {
    isPlaying: playing,
    currentIndex,
    toggleSlideShow,
    goNext,
    goPrev,
    canGoNext,
    canGoPrev,
  };
};
