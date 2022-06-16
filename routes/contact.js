const express = require('express')
const router = express()


router.get('/contact', (req,res)=> {
    res.render('contact')
    console.log('contact route')
})


module.exports = router