import express from "express";
import cors from "cors";
import productRoutes from './api/routes/product.route.js'
import authRoutes from './api/routes/auth.route.js'
import { initialUser } from "./api/config/initial.config.js";
import redis from './api/config/redis.config.js'
const app = express();
// Setup Connection to DB
// Middlewares
app.use(express.json());
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
// parse requests of content-type - application/json
app.use(cors(corsOptions))
// create user if not count when start  
await initialUser() 
// GROUP APP ROUTES
app.use('/product', productRoutes);
app.use('/auth', authRoutes);

// Handle error when not match route 
app.use((req, res, next) =>{
    const error = new Error('Not found!')
    error.status = 500
    next(error)
})
// Writing error handlers
app.use((err, req, res, next) => {
   res.json(
    {
        status: err.status || 500,
        message: err.message
    }
   )
})
// Error handling middleware
// error handle 
// Start server
export default app