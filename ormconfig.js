require('dotenv/config');

module.exports = {
    type: process.env.DB_TYPE,
    url: process.env.DB_URL,

    entities: [process.env.ENTITIES],
    migrations: [process.env.MIGRATIONS],
    cli: {
        migrationsDir: process.env.MIGRATIONS_DIR,
    },
    extra: {
        ssl: {
            rejectUnauthorized: false,
        },
    },
};
