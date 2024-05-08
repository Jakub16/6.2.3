docker image build -t api-node app
docker image build -t tests-node tests
docker image build -t frontend-react frontend/my-app

docker network create --driver=bridge backend-network --subnet=172.19.0.0/24
docker network create --driver=bridge frontend-network --subnet=172.19.1.0/24

docker container run --rm -d \
    --name postgres \
    --net backend-network \
    -v $(pwd)/database:/docker-entrypoint-initdb.d \
    -v pg-data:/var/lib/postgresql/data \
    -e POSTGRES_USER=dbuser \
    -e POSTGRES_PASSWORD=test \
    -e POSTGRES_DB=sample-db \
    postgres:16.2-alpine

docker container run --rm -d \
    --name api \
    --net frontend-network \
    --net backend-network \
    -p 5000:5000 \
    api-node

docker container run --rm -d \
    --name frontend \
    --net frontend-network \
    -p 3000:3000 \
    frontend-react

echo "Sleeping for 5 sec..."
sleep 5

winpty docker container run --rm -it \
    --name tests \
    --net frontend-network \
    -e BASE_URL="http://api:5000" \
    tests-node

echo "Network tests: "
sh test_network.sh