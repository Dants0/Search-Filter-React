import express from "express";
const app = express();
import { Users } from "./users.js";
import cors from "cors";

app.use(cors());

app.get("/", (req, res) => {
  const { q } = req.query;

  const keys = ["name","house", "patronus", "actor" ,"gender"];

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(q)) ||  keys.some((key) => item[key].toUpperCase().includes(q)) || keys.some((key) => item[key].includes(q))
    );
  };

  q ? res.json(search(Users).slice(0, 20)) : res.json(Users.slice(0, 20));
});

app.listen(5000, () => console.log("API is working!"));
  
  