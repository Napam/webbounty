# CLIENT_ID and CLIENT_SECRET should not be set here, but in the generated file
cat <<EOF > .env
USER=$(whoami)
USER_UID=$(id -u)
USER_GID=$(id -g)
GOPATH=$(go env GOPATH)
CLIENT_ID="insert harvest oauth client id here"
CLIENT_SECRET="insert harvest oauth secret id here"
HOME_CACHE=$HOME/.cache
HOME_YARN=$HOME/.yarn
EOF
