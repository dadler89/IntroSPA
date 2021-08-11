const express = require("express");
const app = express();


app.get("/status", (request, response) => {
  response.send(JSON.stringify({ message: "Are you an Outkast? I know I am "}))
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

  app
  .route("/greet/:name")
  .get((request, response) => {
 const name = request.params.name;
 response.status(418).json({message: `${name}, we only have so much time left in this world`})
  })



app.listen(3000, () => {
  console.log("Andre 3k on the port")
} );
