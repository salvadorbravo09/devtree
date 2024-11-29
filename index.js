import express from "express";

const app = express();

// Routing
app.get("/", (req, res) => {
  res.send("Hola mundo en Express");
});

// Port
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port: ${port}`);
});
