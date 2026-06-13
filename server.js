const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Tarot API is running!");
});

app.post("/reading", async (req, res) => {

    const { cards } = req.body;

    const spread = `
Past: ${cards[0]}
Present: ${cards[1]}
Future: ${cards[2]}
Challenge: ${cards[3]}
Guidance: ${cards[4]}
`;

    const prompt = `
You are an expert tarot reader.

Interpret this tarot spread:

${spread}

Provide:

1. Overall message
2. Past influences
3. Present situation
4. Future direction
5. Main challenge
6. Guidance
7. Final summary

Write like a professional tarot reader.
`;

    try {

        const response = await fetch(
            "https://openrouter.ai/api/v1/chat/completions",
            {
                method: "POST",

                headers: {
                    Authorization:
                        `Bearer ${process.env.OPENROUTER_API_KEY}`,

                    "Content-Type":
                        "application/json",

                    "HTTP-Referer":
                        "https://sauravnakarmi.github.io/tarot-reader/",

                    "X-Title":
                        "Tarot Reader"
                },

                body: JSON.stringify({

                    model:
                        "nex-agi/nex-n2-pro:free",

                    messages: [
                        {
                            role: "user",
                            content: prompt
                        }
                    ]
                })
            }
        );

        const data =
            await response.json();

        const reading =
            data.choices?.[0]
                ?.message?.content;

        res.json({
            reading
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error:
                "Unable to generate reading."
        });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});