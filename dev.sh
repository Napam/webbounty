tempfile="./docker-compose.dev.temp.yaml"

cat ./docker-compose.dev.yaml | \
sed "s|{GOPATH}|$(go env GOPATH)|" | \
sed "s|{HOME_CACHE}|$HOME/.cache|" | \
sed "s|{HOME_YARN}|$HOME/.yarn|" | \
sed "s/{USER}/$(whoami)/" | \
sed "s/{USER_UID}/$(id -u)/" | \
sed "s/{USER_GID}/$(id -g)/" > $tempfile
docker compose -f $tempfile up
