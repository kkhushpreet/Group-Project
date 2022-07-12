const express = require('express')
const knex = require('../db/client')

const router = express.Router()

router.get('/',(_req, res)=> {
    res.render('index', {
        title: 'Super Team Picker',
    })
});
module.exports = router

