# YAPE APP WITH NODEJS AND DOCKER

# Deploy Docker
1. Create image docker
`docker build -t <your username>/yape-app-docker .`
2. Image Done
`docker images`
3. Run Image
`docker run -p 49160:8080 -d <your username>/yape-app-docker`
4. Print output app
Get container ID
`docker ps`
Print app output
`docker logs <container id>`