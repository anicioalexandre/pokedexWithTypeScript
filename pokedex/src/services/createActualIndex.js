const createActualIndex = (array, id) => {
  const index = array?.findIndex((obj) => Number(obj.id) === id);
  return index;
};

export default createActualIndex;
