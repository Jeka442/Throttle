export const useThrottle = (func: (...args: any) => any, time: number) => {
  let inThrottle: boolean;
  return (...args: any) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), time);
    }
  };
};
