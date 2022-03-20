import express from "express";
import cors from "cors";
import {Users} from "./users.js";
const app = express();


app.use(cors());

app.get('/',(req, res)=>{

    //var query
    const { q } = req.query;


    //array de parametros
    const keys = ["name","patronus", "{wand.length}", "house", "actor" ,"gender"];


    //percorrendo array
    const search = (data) => {
        return data.filter((item) =>
          keys.some((key) => item[key].toLowerCase().includes(q)) || keys.some((key) => item[key].toUpperCase().includes(q)) || keys.some((key) => item[key].includes(q))
        );
      };

    q ? res.json(search(Users).slice(0,10)) : res.json(search(Users).slice(0,10));

});

app.listen(5000,()=>console.log('api ok'));