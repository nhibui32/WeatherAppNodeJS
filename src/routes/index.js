// Combines all the route files
import express from 'express'

const router = express.Router();

router.get('/', (req,res)=>{
    res.send('Hello World');
});

router.get('/example', (req,res)=>{
    res.render('sample.ejs') // tạo view động, dùng render
})

export default router;