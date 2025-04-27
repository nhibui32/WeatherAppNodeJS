// Combines all the route files
import express from 'express'
import {getHomePage , getStaticPage} from '../controllers/homeController.js'
const router = express.Router();

// router.Method('./route', handler)

// router.get('/', (req,res)=>{
//     res.send('Hello World');
// });

// router.get('/example', (req,res)=>{
//     res.render('sample.ejs') // tạo view động, dùng render
// })

router.get('/', getHomePage);
router.get('/example', getStaticPage)

export default router;