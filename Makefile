url-collector-id=$(shell docker ps -a -q -f "name=url-collector")

magic: build-all run

clean:
	rm -rf node_modules
	rm -rf built

# ==================================== BUILDING IMAGES ====================================== #

build-all:
	@docker-compose -f docker-compose.dev.yaml build

# ==================================== BUILDING IMAGES ====================================== #

run:
	@docker-compose -f docker-compose.dev.yaml up -d

# =================================== STOPPING IMAGES ======================================= #

stop:
	@docker-compose -f docker-compose.dev.yaml stop

# ================================= RESTARTING ALL SERVICES ================================= #

restart: stop run

# ========================= CLEAN DEV DOCKER ENVIRONMENT (PURGE DB) ========================= #

clean-dev:
	docker-compose -f ./docker-compose.dev.yaml rm

# =========================== RUN APP IN A DEV DOCKER ENVIRONMENT =========================== #

dev:
	docker-compose -f ./docker-compose.dev.yaml up

# ========================================= LOGS ============================================ #

attach-console:
	docker-compose -f docker-compose.dev.yaml logs --follow backend

logs: attach-console

logs-back:
	docker-compose -f docker-compose.dev.yaml logs --follow backend

# =================================== REMOVING CONTAINERS =================================== #

rm-back:
	@docker rm $(url-collector-id)

rm-all: rm-back

# =================================== STOPING CONTAINERS ==================================== #

stop-back:
	@docker stop $(url-collector-id)

stop-all: stop-back

# ======================================== REBUILDING ======================================= #

rebuild: stop-all rm-all build-all run

# ==================================== OPTING INTO SHELL ==================================== #

sh-collector:
	docker-compose -f ./docker-compose.dev.yaml run backend sh
