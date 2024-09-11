import express from 'express'
import { userRouter } from './src/modules/users/users.routes.js'
import { productsRouter } from './src/modules/products/products.routes.js';

const app = express()
const port = 3000

app.use(express.json())
app.use(userRouter)
app.use(productsRouter)
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))