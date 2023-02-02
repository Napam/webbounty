#!/bin/bash

docker compose -f ./docker-compose.prod.yaml up --build
docker compose -f ./docker-compose.prod.yaml down

