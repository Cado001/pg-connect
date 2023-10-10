// import tools from pg library
// import { Client } from 'pg'
import pg from 'pg'
const { Client } = pg
// import connection string form credentials / serect file
import { connectionURI } from './creds.js'

// create clients connection to database 
const client = new Client({
   connectionString: connectionURI,
})

// open connection 
await client.connect()

// run querey
const time = await client.query('SELECT NOW ()')

console.log(time)

// close connection
client.end()
