const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const commonRoutes = require('./routes/home')
const aboutRoute = require('./routes/about')
const blogRoute = require('./routes/blog')
const newsRoute = require('./routes/news')
const contactRoute = require('./routes/contact')
const joinRoute = require('./routes/join')



app.use(express.urlencoded({extended:false}));
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use('/', (commonRoutes))
app.use('/', (aboutRoute))
app.use('/', (joinRoute))
app.use('/', (blogRoute))
app.use('/', (newsRoute))
app.use('/', (contactRoute))





app.listen(port,()=> console.log(`Server running on port: ${port}`))