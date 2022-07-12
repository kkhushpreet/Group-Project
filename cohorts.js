const express = require('express')
const knex = require('../db/client')

const router = express.Router()

router.get('/',(_req, res)=> {
    res.render('index', {
        title: 'Super Team Picker',
    })
})

router.post('/',(req, _res)=> {
    knex('groups')
    .insert({
        groupLogo: req.body.logoUrl,
        name: req.body.name,
        members: req.body.members
    })
    .returning('*')
    .then((groups)=> {
        const group = groups[0]
        console.log(group)
    })
})

router.get('/new',(_req, res)=> {
    res.render('cohorts/new')
})

module.exports = router