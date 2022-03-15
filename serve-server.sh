#!/bin/bash
echo "Running server in docker container with emulators..."
docker compose run --rm --service-ports gethapier-api-server npx nx serve gethapier-api
