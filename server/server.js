const express = require("express");
const cors = require("cors");
const {OpenAIApi} = require("openai");

const app = express();
const port = 8080;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Bonjour, Monde!");
});

const openai = new OpenAIApi({
  apiKey: "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",
});

app.get("/chatgpt", async (req, res) => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {role: "system", content: "You are a helpful assistant."},
        {role: "user", content: "Who won the world series in 2020?"},
        {
          role: "assistant",
          content: "The Los Angeles Dodgers won the World Series in 2020.",
        },
        {role: "user", content: "Where was it played?"},
      ],
    });

    console.log("Je suis ici");
    res.json(response.data);
  } catch (error) {
    console.error("Erreur lors de la requête vers l'API OpenAI:", error);
    res
      .status(500)
      .json({error: "Erreur lors de la requête vers l'API OpenAI"});
  }
});

app.listen(port, () => {
  console.log(`Le serveur écoute sur le port ${port}`);
});
