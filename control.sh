#!/bin/bash

# app version
version="0.0.1"
app="npm-template-pure"

echo ">>> Thanks for using npm javascript template"

function build() {
  echo ">> The current version of $app is $version"
  # handle lib directory
  # 判断文件是否存在(多文件时，用来重命名文件)
  if [ -d "npm/" ]; then
    echo ">>> Rename the dist directory"
    mv npm/multi-entry.js npm/index.js
    else
    echo ">>> No such dir"
  fi

  # handle typed file
  cp src/index.d.ts npm/index.d.ts
}


if [ "$1" == "" ]; then
  help
elif [ "$1" == "build" ]; then
  build
else
  help
fi