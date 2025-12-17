import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.get("/api/products", (req, res) => {
  //GET ALL PRODUCTS

  res.status(200).json({
    success: true,
    data: [
      { id: 1, name: "Product 1" },
      { id: 2, name: "Product 2" },
      { id: 3, name: "Product 3" },
    ],
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
