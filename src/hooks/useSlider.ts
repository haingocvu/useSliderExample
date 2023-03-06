import { useState, useRef, useMemo } from 'react';
interface ReturnPayload {
  isPlaying: boolean;
  currentIndex: number;
  startSlideShow: () => void;
  nextSlide: () => void;
  prevSlide: () => void;
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

  const slideLength = slides.length;

  const timer = useRef<any>(null);

  const startSlideShow = () => {
    setPlaying((playing) => !playing);
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
      return;
    }
    timer.current = setInterval(() => {
      setCurrentIndex((index) => {
        const nextIndex = ++index;
        return nextIndex >= slideLength ? 0 : nextIndex;
      });
    }, interval);
  };

  const nextSlide = () => {
    setCurrentIndex((index) => {
      const newIndex = ++index;
      return newIndex >= slideLength
        ? mode === 'I'
          ? 0
          : slideLength - 1
        : newIndex;
    });
  };

  const prevSlide = () => {
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
    startSlideShow,
    nextSlide,
    prevSlide,
    canGoNext,
    canGoPrev,
  };
};
