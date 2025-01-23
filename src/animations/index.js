export const animationOne = {
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: `100vw`,
  },
};

export const animationTwo = {
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: `-100vw`,
  },
};

export const animationThree = {
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: "100vh",
  },
  end: {
    opacity: 0,
    y: `-100vh`,
  },
};

export const transitionOne = {
  duration: 0.8,
};

export const transitionTwo = {
  duration: 0.5,
};

export const fadeLeft = {
  hidden: { opacity: 0, x: 200 },
  visible: { opacity: 1, x: 0 },
};
