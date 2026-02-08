#!/bin/bash

(
  echo "catch squirtle"
  sleep 2
  echo "exit"
) | npm run dev | tee repl.log
