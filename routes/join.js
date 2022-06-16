const express = require('express')
const router = express()



router.get('/join', (req,res)=> {
    
    res.render('join')
    console.log('join route')
})

module.exports = router

