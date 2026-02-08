import { startREPL } from "./repl.js"; // use .js even though the file is .ts
import { initState } from "./state.js";

function main() {
  const state = initState();
  startREPL(state);
}

main();

