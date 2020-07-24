import React from 'react';
import { PokemonInfo } from '../types/PokemonData';
import { TypeButton, TypesContainer, ImageContainer } from '../styles';
import typesColors from '../localdata/typesColors';

interface PokemonCardProps {
  uniquePokemonData: PokemonInfo;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ uniquePokemonData }) => {
  const { id, name, types } = uniquePokemonData;
  return (
    <>
      <TypesContainer>
        <h2>{name}</h2>
      </TypesContainer>
      <ImageContainer>
        <img
          width={`${100}px`}
          src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
          alt="pokemonImage"
        />
      </ImageContainer>
      <TypesContainer>
        {types?.map(({ type }) => (
          <TypeButton key={type.name} background={typesColors[type.name]}>
            {type.name}
          </TypeButton>
        ))}
      </TypesContainer>
    </>
  );
};

export default PokemonCard;
