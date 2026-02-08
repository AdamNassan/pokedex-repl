#!/bin/bash

(
  echo "inspect pidgey"
  sleep 1
  echo "catch pidgey"
  sleep 2
  echo "inspect pidgey"
  sleep 2
  echo "exit"
) | npm run dev
