import express from 'express'
import dotenv from 'dotenv';
dotenv.config();
import path from 'path' // import path to to use path.join of ejs engine below
import { fileURLToPath } from 'url';

 
const app = express();
const port = process.env.PORT || 3000;

// These two lines recreate __filename and __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// config template engine
app.set('views' , path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

// use template engine with template express, we are going to use EJS engine
// install ejs with command npm instal --save-exact ejs@3.1.8
//khai bao route below
app.get('/', (req,res)=>{
  res.send('Hello World');
});

app.get('/example', (req,res)=>{
  res.render('sample.ejs') // tạo view động, dùng render
})
app.listen(port, () => {
  console.log(`Express server running at http://localhost:${port}`)
})

