const heavyWork = (iterations = 100000) => {
  let x = 0;
  for (let i = 0; i < iterations; i++) {
    x += Math.sqrt(i) % 1;
  }
  return x;
};

export default heavyWork;
