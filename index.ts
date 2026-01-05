import express from 'express';
import bodyParser from 'body-parser'
import productsRoutes from './routes/products.ts'

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use('/', productsRoutes);

app.get('/', (req, res)=> res.send('Hello from store_app server'))



app.listen(PORT, ()=> console.log(`Server running on port http://localhost:${PORT}`))
app.listen(PORT, ()=> console.log(`Get Products on port http://localhost:${PORT}/products`))

