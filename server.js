import express from "express";
import cors from "cors";
import iphoneRoutes from './routes/iphoneRoutes.js'

const app = express();

// Setup Connection to DB
// Middlewares
app.use(express.json());
app.use(cors())
// GROUP APP ROUTES
app.use('/iphone', iphoneRoutes);
// Start server
app.listen(3001, () => {
  console.log("listen 3000");
});