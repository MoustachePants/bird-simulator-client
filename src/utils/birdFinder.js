const birdFinder = (birds, tailNum) => {
  if (!tailNum || !birds) return { bird: {}, birdIndex: null };

  const bird = birds.find((bird) => bird.tailNum === tailNum);
  const birdIndex = birds.findIndex(
    (birdElement) => birdElement.tailNum === bird.tailNum
  );
  return { bird, birdIndex };
};

export default birdFinder;
