import express from "express";
import "dotenv/config";
const app = express();
const port = process.env.PORT || 3001;
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ mensaje: "Backend de recurrent en funcionamiento" });
});

app.listen(port, () => {
  console.log("El servidor esta funcionando en el puerto", port);
  console.log(`La url http://127.0.0.1:${port}`);
});
