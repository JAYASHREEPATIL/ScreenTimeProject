import express, { type Response } from "express";

const app = express();
const PORT = process.env.PORT || 3000;

/**
 * Middleware function parses incoming request bodies with JSON payloads and makes the parsed data available on the `req.body`
 * property of the request object
 */
app.use(express.json());

// For testing
app.get("/", (_, res: Response) => res.send("Ok"));

app.get("/approval", (_, res: Response<{ approved: boolean }>) => {
  /**
   * Mock logic:
   * Determining whether the current seconds value of the current time is divisible by 2 and based on that
   * returning value
   */
  const isApproved = new Date().getSeconds() % 2 === 0;

  res.status(200).json({ approved: isApproved });
});

// Handling incorrect routes
app.use((_, res: Response<{ message: string }>) =>
  res.status(404).json({
    message: "Invalid route",
  }),
);

app.listen(PORT, () => {
  console.log(`Server ready at http://localhost:${PORT}`);
});
