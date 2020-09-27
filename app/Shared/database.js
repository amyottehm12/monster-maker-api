let mongoose = require('mongoose');

const database = process.env.DB_CONNECTION;

class Database {
  constructor() {
    this._connect()
  }
  
_connect() {
     mongoose.connect(database)
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error')
       })
  }
}

module.exports = new Database()