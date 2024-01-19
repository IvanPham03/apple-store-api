import express from "express";
import cors from "cors";
import productRoutes from './api/routes/product.route.js'
import authRoutes from './api/routes/auth.route.js'
import { initialUser } from "./api/config/initial.config.js";
import RedisStore from "connect-redis"
import session from "express-session"
import {createClient} from "redis"
import cookieParser from "cookie-parser";
import helmet from "helmet";
const app = express();
// Middlewares
app.use(express.json())
// adding cookieParser to middleware stack
app.use(cookieParser());
// helmet để che dấu header 
app.use(helmet())
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
// parse requests of content-type - application/json
app.use(cors(corsOptions))
// Initialize client.
let redisClient = createClient()
redisClient.connect().catch(console.error)

// Initialize store redis
let redisStore = new RedisStore({
  client: redisClient,
  prefix: "myapp:",
})

// Initialize sesssion storage.
app.use(
  session({
    store: redisStore,
    resave: false, // required: force lightweight session keep alive (touch)
    saveUninitialized: false, // recommended: only save session when data exists
    secret: "keyboard cat",
  })
)
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

// create sample user
await initialUser() 

// GROUP APP ROUTES
app.use('/product', productRoutes);
app.use('/auth', authRoutes);
// Error handling middleware
// error handle 
// Start server
export default app