import { EvolutionObj } from "./evolutionArray";

const createActualIndex = (array: EvolutionObj[], id: number) => {
  const index = array?.findIndex((obj) => Number(obj.id) === id);
  return index;
};

export default createActualIndex;
