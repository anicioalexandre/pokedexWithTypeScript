const getPokemonId = (url: string) => {
  const splitedArr = url.split('/');
  return splitedArr[splitedArr.length - 2];
};

export default getPokemonId;
