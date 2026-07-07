import express from "express";
import type { Application, Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
const app: Application = express();
const PORT = process.env.PORT || 7000;

// * Dummy Quotes Data Array
const quotes = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "Brevity is the soul of wit.", author: "William Shakespeare" },
  { text: "Whether you think you can or you think you can't, you're right.", author: "Henry Ford" },
  { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" }
];

// * Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  return res.send("It's working 🙌 nice");
});


// * NEW: Random Quote Route
app.get("/api/quote", (req: Request, res: Response) => {
  // Generate a random index between 0 and the length of the quotes array
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  
  // Return the random quote as JSON
  return res.json(randomQuote);
});


app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));


