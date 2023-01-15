# Gogo Apps - Url Collector coding assignment

Solution to coding assignment from Gogo Apps.
The task was to create simple service with endpoint used to fetch urls of images from NASA API.

## Requirements 📓

- yarn >= 1.22.19
- node >= v18.13.0

## How to clone and run 🏃‍♂️

First off clone the repo and enter the repository folder.

```bash
git clone git@github.com:mjaskot/TWFyY2luIEdvZ29BcHBzIE5BU0E-.git
cd TWFyY2luIEdvZ29BcHBzIE5BU0E-
```

> :car: Using make
```bash
make magic

//alternatively

make build-all
make run

//to view logs

make logs
```

> 🏛️ Classic way

```bash
yarn build
yarn start
```

## Whats inside? 🔎

I went with pretty simple yet elegant and easy to build upon architecture.
Im not happy with module name of `pictures` because I feel it should be named `urls` to be more selfexplanatory from implementation perspective but since the task required route to be `/pictures` I just went with it.

```
├── yarn.lock
├── tsconfig.json
├── src
│   ├── pictures
│   │   ├── tests
│   │   │   └── pricture.service.test.ts
│   │   ├── providers
│   │   │   └── NASAPictureProvider.ts
│   │   ├── pictures.types.ts
│   │   ├── pictures.service.ts
│   │   ├── pictures.controller.ts
│   │   ├── interfaces
│   │   │   └── PictureProvider.ts
│   │   ├── index.ts
│   │   └── _helpers
│   │       ├── validateDates.ts
│   │       ├── trimDate.ts
│   │       └── getDatesInRange.ts
│   ├── middlewares
│   │   └── logger.middleware.ts
│   ├── main.ts
│   ├── errors
│   │   ├── statusError.ts
│   │   └── errorHandler.ts
│   ├── core
│   │   ├── logger.ts
│   │   └── env.ts
│   └── app.ts
├── package.json
├── nodemon.json
├── environmentals.env.example
├── environmentals.env
├── docker-compose.dev.yaml
├── README.md
├── Makefile
└── Dockerfile
```

As ilustrated above, project structure is pretty self explanatory and clean.

In case of core, errors, middleware folder:

- core - Folder which contains all essentian functionalities like db connection, logger etc.
- errors - Folder where all custom exceptions and handler should be kept.
- middlewares - Folder for all globally used middlewares.

## How to configure 🔧

There are two config files to place environmental variables in.
First one is classic `.env` file. To see list of required variables please relate to `.env.example` file. `.env` is used to run application in "classic" way using yarn.

To configure application to be used via docker and docker-compose with make `environmentals.env` file should be created. To see list of required variables please relate to `environmentals.env.example`