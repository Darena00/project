# Builds the Docker images
docker-build:
	docker-compose build --pull --no-cache

# Start the docker in detached mode
docker-up:
	docker-compose up --detach

# Build and start the containers
docker-start: docker-build docker-up

# Stop the docker containers
docker-down:
	docker-compose down --remove-orphans

# Show live logs
docker-logs:
	docker-compose logs --tail=0 --follow

# Connect to the PHP container
docker-ssh:
	docker-compose exec app bash
