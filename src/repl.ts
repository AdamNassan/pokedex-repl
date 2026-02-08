import { cleanInput } from "./replUtils.js";
import type { State } from "./state.js";

export function startREPL(state: State) {
  const { rl, commands } = state;

  rl.prompt();

  rl.on("line", (line) => {
    const words = cleanInput(line);

    if (words.length === 0) {
      rl.prompt();
      return;
    }

    const commandName = words[0];
    const args = words.slice(1); // Get all arguments after the command

    const command = commands[commandName];

    if (command) {
      command
        .callback(state, ...args)
        .then(() => {
          rl.prompt();
        })
        .catch((err) => {
          console.error("Error running command:", err);
          rl.prompt();
        });
    } else {
      console.log("Unknown command");
      rl.prompt();
    }
  });
}

