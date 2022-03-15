#!/bin/bash
# npx nx run gethapier-api:watch
# TEMPORARY: https://github.com/nrwl/nx/issues/8269
./exec-with-emulator.sh 'npx nx run gethapier-api:run-tests --watch'
