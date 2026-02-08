import type { State } from "./state.js";

export async function commandCatch(state: State, ...args: string[]) {
  if (args.length === 0) {
    console.log("Usage: catch <pokemon-name>");
    return;
  }

  const pokemonName = args[0].toLowerCase();
  console.log(`Throwing a Pokeball at ${pokemonName}...`);

  // Check if already caught
  if (state.pokedex[pokemonName]) {
    console.log(`You already have ${pokemonName} in your Pokedex!`);
    return;
  }

  // Fetch Pokemon data
  let pokemon;
  try {
    pokemon = await state.pokeapi.fetchPokemon(pokemonName);
  } catch (error) {
    console.log(`Failed to find ${pokemonName}!`);
    return;
  }

  // Calculate catch probability based on base_experience
  // Higher base_experience = harder to catch
  // Formula: chance decreases as base_experience increases
  // Max base_experience in Gen 1-2 is around 600, so we'll use that as reference
  const catchDifficulty = pokemon.base_experience / 600;
  const catchChance = Math.max(0.1, 1 - catchDifficulty); // At least 10% chance
  
  const randomRoll = Math.random();
  
  if (randomRoll < catchChance) {
    // Caught!
    state.pokedex[pokemonName] = pokemon;
    console.log(`${pokemonName} was caught!`);
    console.log("You may now inspect it with the inspect command.");
  } else {
    // Escaped
    console.log(`${pokemonName} escaped!`);
  }
}
