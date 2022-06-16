const express = require('express')
const router = express()


router.get('/blog', (req,res)=> {
    res.render('blog')
    console.log('blog route')
})


module.exports = router