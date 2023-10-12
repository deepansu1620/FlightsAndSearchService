# Welcome to Flights Service

## Project Setup
- clone the project on your local
- Execute `npm install` on the same path as of your root directory of the downloaded project
- Create a `.env` file in the root directory and add the following enviroment variable
  - `PORT-3000`
- Install the `src/config` folder create a new file `config.json` and then add the following piece of json

```
{
  "development": {
    "username": "root",
    "password": <Your_DB_Password>,
    "database": "Flights_Search_DB_Dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```
- Once you have added your db config as listed above, go to thee src folder from your terminal and execute `npx sequelize db:create`
and then execute `npx sequelize db:migrate`



## DB Design
  - Airplane Table
  - Flight
  - Airport
  - City

  - A flight belongs to an airplane but one airplane can be used in multiple flights
  - A city has many airports but one airports belongs to a city
  - One airport can have many flights, but a flight belongs to one airport