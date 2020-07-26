# Back

## How to run

run 
```sh
npm install
```

configure your db credentials in ``/src/db/config/config.js``, use the development config.

run 
```sh
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

And that's all, no sql provided since the ORM does create the tables and seed them.