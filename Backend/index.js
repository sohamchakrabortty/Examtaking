import express from 'express';
import Authentication from './middlewere/authentication.js';
import examEssencials from './middlewere/exammiddlewere.js';
import cors from 'cors'
const app = express()
const port = 3000
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/auth',Authentication)
app.use('/getexam',examEssencials);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})//fciomgiomiofko