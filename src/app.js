
/**
 * Created by dhroovgupta7 on 06/09/18
 */


const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set('view engine','hbs')
app.set('view cache',true)
app.set('views',path.join(__dirname + '../views'))

app.listen(9898,() => { //change this when deploy this in prod.
    console.log('server started at http://localhost:9898')
})