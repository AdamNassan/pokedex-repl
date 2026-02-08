#!/bin/bash

(
  echo "pokedex"
  sleep 1
  echo "catch pidgey"
  sleep 2
  echo "catch caterpie"
  sleep 2
  echo "pokedex"
  sleep 1
  echo "exit"
) | npm run dev
