import express from "express";
import cors from "cors";
import productRoutes from './api/routes/product.route.js'

const app = express();

// Setup Connection to DB
// Middlewares
app.use(express.json());
app.use(cors())
// GROUP APP ROUTES
app.use('/iphone', productRoutes);
// Start server
export default app