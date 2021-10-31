const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello to the awesome fabolous great new world");
});
const users = [
  { name: "kuddus", id: 0 },
  { name: "jobbar", id: 1 },
  { name: "siraj", id: 2 },
  { name: "ghoseti", id: 3 },
  { name: "majhi", id: 4 },
];
app.get("/users", (req, res) => {
  const search = req.query.search;
  if (search) {
    const searchResults = users.filter((user) =>
      user.name.toLowerCase().includes(search)
    );
    res.send(searchResults);
  } else {
    res.send(users);
  }
});
app.post("/users", (req, res) => {
  // console.log("hitting the post", req.body);
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  res.json(newUser);
});
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

app.listen(port, () => {
  console.log("listening to the new port", port);
});
