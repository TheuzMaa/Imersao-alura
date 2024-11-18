import express from "express";

const app = express();
app.listen(3000, () => {
    console.log("Servidor escutando...");
});

app.get("/api", (req, res) => {
    res.status(200).send("Boas vindas à imersão!")
});

app.get('/livro', (req, res) => {
    const livro = {
      titulo: "O Senhor dos Anéis",
      autor: "J.R.R. Tolkien",
      ano: 1954,
      genero: "Fantasia"
    };
  
    
    res.status(200).send(livro);
  });
  
