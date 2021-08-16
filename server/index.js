const express = require("express");
const mongoose = require("mongoose")
// const greetings = require("./routers/greetings")


const app = express();



const logging = (request, response, next) => {
  console.log(`${request.method} ${request.url} ${Date.now()}`);
  next();
};


// Using the middleware functions

app.use(express.json());
app.use(logging);

// app.use(greetings);



mongoose.connect("mongodb://localhost/pizzeria", { useNewUrlParser: true }, { useUnifiedTopology: true })
const db = mongoose.connection

db.on("error", console.error.bind(console, "Connection Error:"));
db.once("open", console.log.bind(console,"Let me take you on that funky ride"));





// Configuring Express instance


app.get("/status", (request, response) => {
  response.send(JSON.stringify({ message: "Are you an Outkast? I know I am "}), 418)
});


app
  .route("/")
  .get((request, response) => {
    response.send(JSON.stringify({ message: "No GET routes available on root funky URI ride." }), 404);
  })
  .post((request, response) => {
    response.send(JSON.stringify({ message: "No POST routes available on root funky URI ride." }), 404);
  });


  app
  .route("/pizzas")
  .get((request, response) => {
    response.send(JSON.stringify({ message: "No GET routes available on pizzas funky URI ride." }), 404);
  })
  .post((request, response) => {
    response.send(JSON.stringify({ message: "No POST routes available on  pizzas funky URI ride." }), 404);
  });



const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Andre 3k on the mic at ${port}`)
} );
