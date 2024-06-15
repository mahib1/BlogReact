// index.js
const express = require("express"); 
const app = express(); 
const PORT = 3000; 

// Import models
const db = require('./models');

//Routers
const postRouter = require("./routes/Posts")
app.use("/posts", postRouter);

app.listen(PORT, () => {
  console.log("The server running on port", PORT);
  console.log("http://localhost:" + PORT); 

  // Sync models to the database
  db.sequelize.sync().then(() => { // Use `force: false` to avoid dropping tables
    console.log('Database synchronized');
  }).catch(err => {
    console.error('Error synchronizing database:', err);
  });
});

// Connect to the existing SQLite database
const sqlite = require("sqlite3").verbose(); 

const dbConnection = new sqlite.Database("ReactApp1.db", (err) => {
  if(err) {
    console.error("Error Opening Database: ", err) ; 
  } else {
    console.log("Connected to the Database"); 
  }
});


