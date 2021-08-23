import express from 'express';
import path from 'path';

const app = express();

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Servidor UP en ${port}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
