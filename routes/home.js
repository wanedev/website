const express = require('express')
const router = express()


router.get('/', (req,res)=> {
    res.render('home')
    console.log('home route')
})


module.exports = router