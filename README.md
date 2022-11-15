# Fullstack Affiliates

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [When app is running](#running)

## 📖 About <a name = "about"></a>

This is a challenge by [Coodesh](https://coodesh.com/)

Fullstack application in which a user can upload a _text_ file with transactions logs and they will be registered in a sql database. The user will also be able to see transactions separated by sellers.

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine.

### ⚙️ Installing

#

- Clone the repository

## To run with docker

Inside the back-end folder

- Setup your .env.docker file

```
DATABASE_URL=postgresql://POSTGRES-USERNAME:POSTGRES-PASSWORD@db:5432/affiliates-docker
POSTGRES_USERNAME=POSTGRES-USERNAME
POSTGRES_PASSWORD=POSTGRES-PASSWORD
PORT=SELECT-PORT
```

Inside the front-end folder

- Setup your .env.docker file

```
REACT_APP_API_BASEURL=http://localhost:5000/
```

Go back to the root folder

- Open a terminal and run the command

```
docker-compose up
```

The application will be up and running in http://localhost:8080

### To run locally

Follow the instructions in the readme file from each folder (front-end and back-end)

## 🏃‍♀️ When application is running <a name = "running"></a>

You can send a **_text_** file and if its contents are correct, the data will be stored in the database

### File format

```
Field    Start    End      Size      Description
Type       1       1        1        Transaction type
Date       2       26       25       Date - ISO Date + GMT
Product    27      56       30       Product description
Value      57      66       10       Transaction value in 'centavos'
Seller     67      86       20       Seller`s name
```

Example of correct file content

```
12022-01-15T19:20:30-03:00CURSO DE BEM-ESTAR            0000012750JOSE CARLOS
12021-12-03T11:46:02-03:00DOMINANDO INVESTIMENTOS       0000050000MARIA CANDIDA
22022-01-16T14:13:54-03:00CURSO DE BEM-ESTAR            0000012750THIAGO OLIVEIRA
32022-01-16T14:13:54-03:00CURSO DE BEM-ESTAR            0000004500THIAGO OLIVEIRA
42022-01-16T14:13:54-03:00CURSO DE BEM-ESTAR            0000004500JOSE CARLOS
12022-01-22T08:59:13-03:00DOMINANDO INVESTIMENTOS       0000050000MARIA CANDIDA
12022-02-01T23:35:43-03:00DESENVOLVEDOR FULL STACK      0000155000ELIANA NOGUEIRA
22022-02-03T17:23:37-03:00DESENVOLVEDOR FULL STACK      0000155000CARLOS BATISTA
22022-02-03T20:51:59-03:00DESENVOLVEDOR FULL STACK      0000155000CAROLINA MACHADO
22022-02-04T07:42:12-03:00DESENVOLVEDOR FULL STACK      0000155000CELSO DE MELO
32022-02-03T17:23:37-03:00DESENVOLVEDOR FULL STACK      0000050000CARLOS BATISTA
32022-02-03T20:51:59-03:00DESENVOLVEDOR FULL STACK      0000050000CAROLINA MACHADO
32022-02-04T07:42:12-03:00DESENVOLVEDOR FULL STACK      0000050000CELSO DE MELO
42022-02-03T17:23:37-03:00DESENVOLVEDOR FULL STACK      0000050000ELIANA NOGUEIRA
42022-02-03T20:51:59-03:00DESENVOLVEDOR FULL STACK      0000050000ELIANA NOGUEIRA
42022-02-04T07:42:12-03:00DESENVOLVEDOR FULL STACK      0000050000ELIANA NOGUEIRA
12022-02-19T05:33:07-03:00DOMINANDO INVESTIMENTOS       0000050000MARIA CANDIDA
12022-03-01T02:09:54-03:00CURSO DE BEM-ESTAR            0000012750JOSE CARLOS
12022-03-03T09:07:35-03:00DESENVOLVEDOR FULL STACK      0000155000ELIANA NOGUEIRA
12022-03-03T13:12:16-03:00DESENVOLVEDOR FULL STACK      0000155000ELIANA NOGUEIRA
```
