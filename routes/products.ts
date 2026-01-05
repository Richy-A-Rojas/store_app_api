import express from 'express';
import type ProductModel from '../models/ProductModel.ts'
import { createClient } from '@supabase/supabase-js'

   
const  url: string = 'https://supab.marcytech.com'
const  apiKey: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN1cGFiLm1hcmN5dGVjaC5jb20iLCJyb2xlIjoiYW5vbiIsImlhdCI6MTc2NzM3NDQxMCwiZXhwIjoyMDgyNzM0NDEwfQ.dzkf5GVqBS78pTUZuDAUR554ckp_FcaRVRlOeIKyNEI'    // Create a single supabase client for interacting with your database
const  supabase = createClient(url, apiKey)



const router = express.Router();

router.get('/products', async (req, res)=>{
    try {
            const productsFetch = await supabase.from('products').select();
            const productList = (productsFetch.data as ProductModel[]);
            const products = [...productList, ...productList, ...productList, ...productList, ...productList]
            res.send(JSON.stringify(products))
        } catch (error: any) {
            res.status(500).json({
                error: "Internal Server Error",
                details: error
            })
        }
});


export default router;