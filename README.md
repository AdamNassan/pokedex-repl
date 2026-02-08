# Pokedex CLI

A command-line interface Pokedex application built with TypeScript that interacts with the [PokeAPI](https://pokeapi.co/) to explore the Pokemon world, catch Pokemon, and manage your collection.

## Features

- 🗺️ **Explore Location Areas** - Navigate through Pokemon world locations
- 🔍 **Discover Pokemon** - Find which Pokemon inhabit different areas
- ⚡ **Catch Pokemon** - Attempt to catch Pokemon with realistic probability mechanics
- 📖 **Inspect Pokemon** - View detailed stats, types, and information about caught Pokemon
- 📚 **Manage Your Pokedex** - Keep track of all Pokemon you've caught
- 💾 **Smart Caching** - Automatic caching system with 5-minute expiration for fast performance
- 🧪 **Fully Tested** - Comprehensive test suite included

## Installation

### Prerequisites

- Node.js (v18 or higher)
- npm

### Setup

1. Clone the repository:
```bash
git clone https://github.com/YOUR-USERNAME/pokedex.git
cd pokedex
```

2. Install dependencies:
```bash
npm install
```

3. Build the project:
```bash
npm run build
```

4. Start the Pokedex:
```bash
npm start
```

Or run in development mode:
```bash
npm run dev
```

## Usage

### Available Commands

| Command | Arguments | Description |
|---------|-----------|-------------|
| `help` | None | Display all available commands |
| `map` | None | Show the next 20 location areas |
| `mapb` | None | Show the previous 20 location areas |
| `explore` | `<area-name>` | List all Pokemon in a specific location area |
| `catch` | `<pokemon-name>` | Attempt to catch a Pokemon |
| `inspect` | `<pokemon-name>` | View details of a caught Pokemon |
| `pokedex` | None | List all Pokemon you've caught |
| `exit` | None | Exit the Pokedex |

### Example Session

```
Pokedex > help
Welcome to the Pokedex!
Usage:

exit: Exit the Pokedex
help: Displays a help message
map: Display the next 20 location areas
mapb: Display the previous 20 location areas
explore: Explore a location area and see Pokemon
catch: Attempt to catch a Pokemon
inspect: View details of a caught Pokemon
pokedex: List all caught Pokemon

Pokedex > map
canalave-city-area
eterna-city-area
pastoria-city-area
...

Pokedex > explore pastoria-city-area
Exploring pastoria-city-area...
Found Pokemon:
 - tentacool
 - tentacruel
 - magikarp
 - gyarados
 ...

Pokedex > catch pikachu
Throwing a Pokeball at pikachu...
pikachu was caught!
You may now inspect it with the inspect command.

Pokedex > inspect pikachu
Name: pikachu
Height: 4
Weight: 60
Stats:
  -hp: 35
  -attack: 55
  -defense: 40
  -special-attack: 50
  -special-defense: 50
  -speed: 90
Types:
  - electric

Pokedex > pokedex
Your Pokedex:
 - pikachu

Pokedex > exit
Closing the Pokedex... Goodbye!
```

## Catch Mechanics

Pokemon are harder to catch based on their base experience:

- **Low base experience** (e.g., Magikarp, Caterpie) → ~90% catch rate
- **Medium base experience** (e.g., Pikachu, Squirtle) → ~70% catch rate
- **High base experience** (e.g., Charizard, Dragonite) → ~40% catch rate
- **Legendary Pokemon** (e.g., Mewtwo, Articuno) → ~30% catch rate

All Pokemon have at least a 10% minimum catch rate. Keep trying!

## Caching System

The application implements an intelligent caching system:

- **Cache Duration**: 5 minutes (300,000 ms)
- **Automatic Cleanup**: Background process removes expired entries
- **What's Cached**: Location data and Pokemon information
- **Benefits**: Instant responses for repeated queries, reduced API calls

## Development

### Run Tests

```bash
npm test
```

### Build TypeScript

```bash
npm run build
```

### Project Structure

```
pokedex/
├── src/
│   ├── command_*.ts          # Command implementations
│   ├── commands_registry.ts  # Command registry
│   ├── main.ts               # Application entry point
│   ├── repl.ts               # REPL loop logic
│   ├── replUtils.ts          # REPL utilities
│   ├── state.ts              # Application state management
│   ├── pokeapi.ts            # PokeAPI client with caching
│   ├── pokecache.ts          # Cache implementation
│   ├── pokecache.test.ts     # Cache tests
│   └── repl.test.ts          # REPL tests
├── package.json
├── tsconfig.json
└── README.md
```

## Technologies Used

- **TypeScript** - Type-safe JavaScript
- **Node.js** - JavaScript runtime
- **Vitest** - Testing framework
- **PokeAPI** - Pokemon data source
- **Readline** - Interactive CLI interface

## API Reference

This project uses the [PokeAPI](https://pokeapi.co/), a free RESTful Pokemon API.

Endpoints used:
- `/location-area` - Get location areas
- `/location-area/{name}` - Get specific location details
- `/pokemon/{name}` - Get Pokemon information

## Testing

The project includes comprehensive tests:

- **Cache Tests**: Verify caching functionality, expiration, and cleanup
- **REPL Tests**: Ensure command parsing and execution work correctly

Run tests with:
```bash
npm test
```

## License

This project is created for educational purposes as part of the Boot.dev curriculum.

## Acknowledgments

- [PokeAPI](https://pokeapi.co/) for providing the Pokemon data
- [Boot.dev](https://boot.dev/) for the project structure and guidance

## Contributing

This is a learning project, but suggestions and improvements are welcome!

---

**Gotta Catch 'Em All!** 🎮
