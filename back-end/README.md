## 📝 Table of Contents


- [Installation](#installation)
- [Routes](#routes)
- [Running Tests](#tests)
- [Used Libraries](#libraries)

## ⚙️ Installation <a name = "installation"></a>


### In this folder

- Instal dependencies
- Setup your env variables
- Start the project!

Open a terminal in this folder and install dependencies with

```
npm i
```

Setup your .env files

```
DATABASE_URL=YOUR-POSTGRES-CONNECTION-URI
PORT=YOUR-PORT
```

To run the project run the command

```
npm start
```

## 🚀 Routes <a name = "routes"></a>


```
GET /transactions
   - Route to get transactions in the database
   - headers: {}
   - body:{}
```

```
POST /transactions
   - Route to send a file and put its contents in the database
   - headers: {}
   - body:{}
```

## 🔧 Running tests <a name = "tests"></a>


Setup your .env.test file

```
DATABASE_URL=postgresql://POSTGRES-USERNAME:POSTGRES-PASSWORD@localhost:5432/affiliates-test
PORT=SELECT-PORT
```

For integration tests

```
npm run test
```

For unit tests

```
npm run test:unit
```

## ⛏️ Built Using <a name = "built_using"></a>

- [PostgreSQL](https://www.postgresql.org/) - PostgreSQL
- [Express](https://expressjs.com/) - Server Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment

## 📕 Used Libraries <a name = "libraries"></a>

- [jest](https://www.npmjs.com/package/jest)
- [cors](https://www.npmjs.com/package/cors)
- [axios](https://www.npmjs.com/package/axios)
- [prisma](https://www.npmjs.com/package/prisma)
- [multer](https://www.npmjs.com/package/multer)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [express](https://www.npmjs.com/package/express)
- [ts-jest](https://www.npmjs.com/package/ts-jest)
- [ts-node](https://www.npmjs.com/package/ts-node)
- [supertest](https://www.npmjs.com/package/supertest)
- [cross-env](https://www.npmjs.com/package/cross-env)
- [dotenv-cli](https://www.npmjs.com/package/dotenv-cli)
- [nodemon](https://www.npmjs.com/package/nodemon)
- [typescript](https://www.npmjs.com/package/typescript)
- [express-async-errors](https://www.npmjs.com/package/express-async-errors)


