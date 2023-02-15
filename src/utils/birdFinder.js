const birdFinder = (birds, tailNum) => {
  const bird = birds.find((bird) => bird.tailNum === tailNum);
  const birdIndex = birds.findIndex(
    (birdElement) => birdElement.tailNum === bird.tailNum
  );
  return { bird, birdIndex };
};

export default birdFinder;
