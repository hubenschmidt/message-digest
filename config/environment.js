module.exports = {
    "development": {
      "host": process.env.HOST,  
      "port": process.env.PORT,
      "provisional_db": process.env.MYSQL_DBNAME,
      "production_db_url": process.env.PRODUCTION_DB_URL,
      "encryption_key": process.env.ENCRYPTION_KEY
    },
    "production": {
      "production_db_url": " ",
    }
  }
  