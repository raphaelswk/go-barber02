<h1 align="center">
  <img alt="Logo" src="https://res.cloudinary.com/eliasgcf/image/upload/v1588625369/GoBarber/logo_iw1v9f.svg" width="200px">
</h1>

<h3 align="center">
  Express Application for GoBarber project
</h3>

<p align="center">The best way to schedule your service!</p>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/raphaelswk/gobarber-web?color=%23FF9000">

  <a href="https://www.linkedin.com/in/raphaelswk/" target="_blank" rel="noopener noreferrer">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-raphael%20socolowski-%23FF9000">
  </a>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/raphaelswk/go-barber?color=%23FF9000">

  <a href="https://github.com/raphaelswk/go-barber/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/raphaelswk/go-barber?color=%23FF9000">
  </a>

  <a href="https://github.com/raphaelswk/go-barber/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/raphaelswk/go-barber?color=%23FF9000">
  </a>

  <img alt="GitHub" src="https://img.shields.io/github/license/raphaelswk/go-barber?color=%23FF9000">
</p>

<p align="center">
  <a href="#%EF%B8%8F-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

<p id="insomniaButton" align="center">
  <a href="https://insomnia.rest/run/?label=GoBarber%20-%20raphaelswk&uri=https://raw.githubusercontent.com/raphaelswk/go-barber/main/gobarber-backend/Insomnia.json" target="_blank">
    <img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

## 💇🏻‍♂️ About the project

This api provides everything needed to organize appointments between the barbers and customers.

Customers can choose the best time available to them.

Providers can see all their appointments, manage the times, also see if one client canceled the schedule.

To see the **web client**, click here: [GoBarber Web](https://github.com/raphaelswk/go-barber/tree/main/gobarber-web)<br />
To see the **mobile client**, click here: [GoBarber Mobile](https://github.com/raphaelswk/go-barber/tree/main/gobarber-mobile)<br />

## 🚀 Technologies

Technologies that I used to develop this api

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Multer](https://github.com/expressjs/multer)
- [TypeORM](https://typeorm.io/#/)
- [JWT-token](https://jwt.io/)
- [uuid v4](https://github.com/thenativeweb/uuidv4/)
- [PostgreSQL](https://www.postgresql.org/)
- [Date-fns](https://date-fns.org/)
- [Jest](https://jestjs.io/)
- [SuperTest](https://github.com/visionmedia/supertest)
- [Husky](https://github.com/typicode/husky)
- [Commitlint](https://github.com/conventional-changelog/commitlint)
- [Commitizen](https://github.com/commitizen/cz-cli)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)

## 💻 Getting started

Import the `Insomnia.json` on Insomnia App or click on [Run in Insomnia](#insomniaButton) button

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)
- One instance of [PostgreSQL](https://www.postgresql.org/)

> Obs.: I recommend using docker

**Clone the project and access the folder**

```bash
$ git clone https://github.com/raphaelswk/go-barber.git && cd go-barber/gobarber-backend
```

**Follow the steps below**

```bash
# Install the dependencies
$ yarn

# Make a copy of '.env.example' to '.env'
# and set with YOUR environment variables.
# The aws variables do not need to be filled for dev environment
$ cp .env.example .env

# Create the instance of postgreSQL using docker
$ docker run --name gobarber-postgres -e POSTGRES_USER=docker \
              -e POSTGRES_DB=gobarber -e POSTGRES_PASSWORD=docker \
              -p 5432:5432 -d postgres

# Create the instance of mongoDB using docker
$ docker run --name gobarber-mongodb -p 27017:27017 -d -t mongo

# Create the instance of redis using docker
$ docker run --name gobarber-redis -p 6379:6379 -d -t redis:alpine

# Once the services are running, run the migrations
$ yarn typeorm migration:run

# To finish, run the api service
$ yarn dev:server

# Well done, project has started!
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with ♥ &nbsp;by Raphael Socolowski 👋 &nbsp;[See my linkedin](https://www.linkedin.com/in/raphaelswk/)
