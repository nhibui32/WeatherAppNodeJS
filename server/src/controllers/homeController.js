//handle logic for user routes

export const getHomePage = (req, res) => {
    res.send('Hello World');
}

export const getStaticPage = (req, res) =>{
    res.render('sample.ejs') // tạo view động, dùng render
}

