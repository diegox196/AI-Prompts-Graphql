const app = require('./app'); // app.js file with the Express configuration
require('dotenv').config()

const { PORT } = process.env; // Get the PORT from environment variables
require('./database'); // Import and establish the database connection from database.js

// Start the server and listen on the specified PORT
app.listen(PORT, () => {
  console.log(`The server is listening on the PORT ${PORT} (URL http://localhost:${PORT})`);
})