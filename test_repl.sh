#!/bin/bash

(
  echo "map"
  sleep 2
  echo "map"
  sleep 2
  echo "mapb"
  sleep 2
  echo "exit"
) | npm run dev | tee repl.log
