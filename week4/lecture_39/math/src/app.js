require("./appmongoose"); // Ensure Task model is defined in this file
const express = require("express");

const app = express();

app.use(express.json()); // Middleware to parse JSON requests

app.get("/", (req, res) => {
  res.send("This is created by express");
});

app.get("/add", (req, res) => {
  let { a, b } = req.query;
  let sum = parseInt(a) + parseInt(b);
  res.send(`${sum}`); // Convert sum to string before sending
});

app.post("/add-task", async (req, res) => { // Add async here
  const task = new Task({ title: "Test task", description: "Test task des" });
  await task.save(); // Ensure Task model is defined in appmongoose
  return res.status(201).send({ message: "Saved!" });
});

app.listen(5000, () => {
  console.log("Server is running");
});
