import React, { useEffect, useState } from "react";
import { usePokemons } from "../context/Pokemons";
import { capitalize } from "../utils/capitalize";

export default function CalculateWinner() {
  const { pokemons } = usePokemons();
  const [winner, setWinner] = useState("Start voting!");

  useEffect(() => {
    const maxVotes = Math.max(...pokemons.map((pokemon) => pokemon.voteCount));
    const winnersNames = pokemons
      .filter((pokemon) => pokemon.voteCount === maxVotes)
      .map((winner) => winner.name);

    if (winnersNames.length === 1) {
      setWinner(`${capitalize(winnersNames[0])} is in the lead with ${maxVotes} votes!`);
    } else if (winnersNames.length === 2) {
      setWinner(
        `It's a tie between ${capitalize(winnersNames[0])} and ${capitalize(winnersNames[1])} with ${maxVotes} votes!`
      );
    } else if (winnersNames.length === 3 && maxVotes !== 0) {
      setWinner(
        `It's a tie between ${capitalize(winnersNames[0])} and ${capitalize(winnersNames[1])} and ${capitalize(winnersNames[2])} with ${maxVotes} votes each!`
      );
    }
  }, [pokemons]);

  return <h2>{winner}</h2>;
}
