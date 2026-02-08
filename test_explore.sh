#!/bin/bash

(
  echo "explore pastoria-city-area"
  sleep 3
  echo "exit"
) | npm run dev | tee repl.log
