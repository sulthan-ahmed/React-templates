import express from "express";
import {renderToStaticMarkup} from "react-dom/server";
import App from "./components/App";
import path from "path";
import fs from 'fs';

const reactServer = express();

reactServer.use(express.urlencoded());

reactServer.get("/", (req ,res, next)=> {
    console.log(path.resolve());
    // reading the template file (you could put gov.uk template here)
    const test = fs.readFileSync(`${path.resolve()}/src/template/layout.html`);
    // converting the byte array from test into a html string
    let str = test.toString();
    // Finding the Template in the html string similar to mustache”
    const regexp = new RegExp("{{TEMPLATE}}");
    // Converting the component App into html & we are passing in variables as well
    const html = renderToStaticMarkup(<App 
      person={{name: 'bart', age: 12}}/>);
      // replacing the template with the html
    str = str.replace(regexp, html);
    return res.status(200).send(str);
})

reactServer.post("/send", (req, res, next) => {
  console.log(req.body.name);
  return res.status(200).send();
})

reactServer.listen(3000, () => {
    console.log("Listening on port: 3000");
})
