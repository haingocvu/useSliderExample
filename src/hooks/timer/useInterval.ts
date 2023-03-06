import { useRef, useMemo, useEffect } from 'react';
interface ReturnPayload {
  startInterval: () => void;
  stopInterval: () => void;
  runningInterval: boolean;
}

export const useInterval = (interval: number, callback: () => void) => {
  const timer = useRef<any>(null);

  const startInterval = () => {
    stopInterval();
    timer.current = setInterval(callback, interval);
  };

  const stopInterval = () => {
    timer.current && clearInterval(timer.current);
    timer.current = null;
  };

  const runningInterval = useMemo(() => {
    return timer.current;
  }, [timer.current]);

  useEffect(() => {
    return () => {
      stopInterval();
    };
  }, []);

  return {
    startInterval,
    stopInterval,
    runningInterval,
  };
};
