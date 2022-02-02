import express from 'express'
import bodyParser from 'body-Parser'
import usersRoutes from './routes/user.js'

const PORT = 5000
const app = express()

app.use(bodyParser.json())
app.use('/users', usersRoutes);

app.get('/', (req,res)=>{
    res.send("home page")
    console.log('server listening on port 5000')
})
app.listen(PORT)