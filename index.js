const express = require('express')
const logger = require('morgan')
const path  = require('path')
const rootRouter = require('./router/root')
const cohortsRouter = require('./router/cohorts')

const app = express()
app.use(logger('dev'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}))
app.set('view engine','ejs')
app.set('views','views')

app.set('view engine','ejs')
app.set('views','views')


app.use('/', rootRouter)
app.use('/cohorts', cohortsRouter)


const port = 3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})