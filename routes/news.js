const express = require('express')
const router = express()


router.get('/news', (req,res)=> {
    res.render('news')
    console.log('news route')
})


module.exports = router