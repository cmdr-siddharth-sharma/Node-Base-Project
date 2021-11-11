
# Node Base Project

## Run Locally

Clone the project

```bash
  git clone https://github.com/cmdr-siddharth-sharma/Node-Base-Project.git
```

Go to the project directory

```bash
  cd Node-Base-Project
```

Install dependencies

```bash
  npm install
```

Create Database

```bash
  npx sequelize-cli db:create
```

Start the server

```bash
  npm start
```

### Creating Models

```bash
  npx sequelize-cli model:generate --name MODEL_NAME --attributes title:string,body:text
```

