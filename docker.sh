docker image build -t api-node app
docker image build -t tests-node tests

docker network create project-network

docker container run --rm -d \
    --name postgres \
    --net project-network \
    -v $(pwd)/database:/docker-entrypoint-initdb.d \
    -v pg-data:/var/lib/postgresql/data \
    -e POSTGRES_USER=dbuser \
    -e POSTGRES_PASSWORD=test \
    -e POSTGRES_DB=sample-db \
    postgres:16.2-alpine

docker container run --rm -d \
    --name api \
    --net project-network \
    -p 3000:3000 \
    api-node

echo "Sleeping for 5 sec..."
sleep 5

winpty docker container run --rm -it \
    --name tests \
    --net project-network \
    -e BASE_URL="http://api:3000" \
    tests-node