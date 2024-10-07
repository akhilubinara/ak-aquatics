
const DATABASE = {
  DB_TYPE: "mysql",
  DB_HOST: "localhost",
  DB_USER: "root",
  DB_PASS: "scot",
  DB_NAME: "aqua_pets_home",
  DB_PORT: "3306",
}

const COMMON = {
    FRONT_END_PORT:3001,
    ADMIN_PORT: 3000,
    CLIENT_URL:"http://localhost:4200",
    ADMIN_CLIENT_URL:"http://localhost:4200",
}

module.exports = {
    apps:[
        // angular services 
        {
            name: "PUBLIC-AQUA-PETS",
            script:"./api/public/app.js",
            env: {
                ...DATABASE,
                ...COMMON,
              },
        },
        // admin panel 
        // {
        //     name: "ADMIN-PANEL",
        //     script: "./api/admin/app.js",
        //     env: {
        //         ...DATABASE,
        //         ...COMMON,
        //       },
        // }
    ]
}