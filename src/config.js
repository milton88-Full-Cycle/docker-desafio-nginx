const config = {
    app: {
        port: process.env.PORT || 3000
    },
    db: {
        host: process.env.DB_HOST || 'mysql',
        user: process.env.DB_USER ||'root',
        password: process.env.DB_PASSWORD || 'my-secret-pw',
        database: process.env.DB_DATABASE || 'my_db'
    }
}

module.exports = config;